const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

// GET /products
// TODO - FIX QUERY PARAM TO ACCEPT ?count=x&page=y INSTEAD OF JUST /products/:page/:count
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
  pool.query(`SELECT * FROM products WHERE id = ${id}`)
    .then((results) => { res.send(results.rows) })
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