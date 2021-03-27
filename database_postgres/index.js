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
  pool.query(`SELECT * FROM products ORDER BY id ASC LIMIT ${limit}`)
    .then((results) => { res.send(results.rows) })
    .catch((err) => { res.send(err) })
}

// GET /products/:product_id
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
const getStyles = (req, res) => {
  const product_id = req.params.product_id
  const stylesObj = {
    product_id: product_id,
    results: []
  }
  pool.query(`SELECT styles.*, photos.url, photos.thumbnail_url, skus.id AS sku_id, skus.size, skus.quantity FROM styles LEFT OUTER JOIN photos ON styles.id = photos.style_id JOIN skus ON styles.id = skus.style_id WHERE product_id = ${product_id}`)
    .then((results) => {
      let idStorage = []
      let urlStorage = [];
      results.rows.forEach((row) => {
        if (idStorage.indexOf(row.id) < 0) {
          let styleObj = {
            style_id: row.id,
            name: row.name,
            original_price: row.original_price,
            sale_price: row.sale_price === 'null' ? '0' : row.sale_price,
            'default?': row.default_style === '1' ? true : false,
            photos: [],
            skus: {}
          }
          if (row.url) {
            styleObj.photos.push({thumbnail_url: row.thumbnail_url, url: row.url})
            urlStorage.push(row.url)
          }
          if (row.sku_id) {
            styleObj.skus[row.sku_id] = {quantity: row.quantity, size: row.size}
          }
          idStorage.push(row.id)
          stylesObj.results.push(styleObj);
        } else {
          let currentStyleIndex = idStorage.indexOf(row.id)
          if (urlStorage.indexOf(row.url) < 0) {
            stylesObj.results[currentStyleIndex].photos.push({ thumbnail_url: row.thumbnail_url, url: row.url })
            urlStorage.push(row.url)
          }
          if (row.sku_id) {
            stylesObj.results[currentStyleIndex].skus[row.sku_id] = { quantity: row.quantity, size: row.size }
          }
        }
      })
      res.send(stylesObj)
    })
    .catch((err) => { res.status(400).send(err) })
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
  .catch((err) => { res.status(400).send(err) })
}

module.exports = {
  getProducts,
  getProductById,
  getStyles,
  getRelated,
}
