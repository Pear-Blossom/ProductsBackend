const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

// GET /products
const getProducts = (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let count = parseInt(req.query.count) || 5;
  const limit = page * count
  pool.query(`SELECT * FROM products LIMIT ${limit}`)
    .then((results) => { res.send(results.rows) })
    .catch((err) => { res.send(err) })
}

// GET /products/:product_id
// TODO: JOIN TABLE WITH FEATURES WITH COLUMN FEATURE AND VALUE WHERE ID IS THE SAME
const getProductById = (req, res) => {
  // const id = parseInt(req.params.product_id)
  const id = req.params.product_id
  const productObj = {
    id: Number(id),
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
  }
  pool.query(`SELECT p.id, p.name, p.slogan, p.description, p.category, p.default_price, f.feature, f.value FROM products p LEFT JOIN features f ON p.id = f.product_id WHERE p.id = ${id}`)
    .then((results) => {
      console.log('resulting rows: ', results.rows)
      productObj.name = results.rows[0].name;
      productObj.slogan = results.rows[0].slogan;
      productObj.description = results.rows[0].description;
      productObj.category = results.rows[0].category;
      productObj.default_price = results.rows[0].default_price;
      if (results.rows[0].feature !== null) {
        productObj.features = [];
        results.rows.forEach((row) => {
          if (row.value !== 'null') {
            let featureObj = {
              feature: row.feature,
              value: row.value
            }
            productObj.features.push(featureObj)
          }
        })
      }
      res.send(productObj)
    })
    .catch((err) => { res.send(err) })
}

// GET /products/:product_id/styles
// TODO JOIN WITH PHOTOS AND SKUS FOR A GIVEN PRODUCT AND NEST THEM IN EACH STYLE OBJECT
const getStyles = (req, res) => {
  const product_id = req.params.product_id
  const stylesObj = {
    product_id: product_id,
    results: []
  }
  pool.query(`SELECT * FROM styles WHERE product_id = ${product_id}`)
    .then((results) => {
      results.rows.forEach((row) => {
        let styleObj = {
          style_id: row.id,
          name: row.name,
          original_price: row.original_price,
          sale_price: row.sale_price === 'null' ? '0' : row.sale_price,
          'default?': row.default_style === '1' ? true : false,
          photos: [],
          skus: {}
        }
        stylesObj.results.push(styleObj);
      })
      res.send(stylesObj)
    })
    .catch((err) => { console.log('error:', err); res.send(err) })
}

// GET /products/:product_id/related
const getRelated = (req, res) => {
  const product_id = parseInt(req.params.product_id);
  const relatedArray = [];
  pool.query(`SELECT related_product_id FROM related WHERE current_product_id = ${product_id}`)
  .then((results) => {
    results.rows.forEach((row) => {
      relatedArray.push(row.related_product_id)
    })
    res.send(relatedArray)
  })
  .catch((err) => { console.log('error:', err); res.send(err) })
}

module.exports = {
  getProducts,
  getProductById,
  getStyles,
  getRelated,
}
