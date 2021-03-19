const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

// // GET /products
// // TODO CHANGE ID TO REQ PARAM
// const getProducts = (req, res) => {
//   const page = 1;
//   const count = 5;
//   if (req) {
//     page = parseInt(req.params.page);
//   }
//   if (req) {
//     count = parseInt(req.params.count);
//   }
//   const limit = page * count
//   pool.query(`SELECT * FROM products LIMIT ${limit}`)
//     .then((results) => { console.log('product results: ', results.rows); res.send(results.rows) })
//     .catch((err) => { res.send(err) })
// }

// // GET /products/:product_id
// // TODO: JOIN TABLE WITH FEATURES WITH COLUMN FEATURE AND VALUE WHERE ID IS THE SAME + CHANGE ID TO REQ PARAM
// const getProductById = (req, res) => {
//   const id = parseInt(req.params.product_id)
//   const id = 15
//   pool.query(`SELECT * FROM products WHERE id = ${id}`)
//     .then((results) => { console.log('product id result: ', results.rows); res.send(results.rows) })
//     .catch((err) => { res.send(err) })
// }

// // GET /products/:product_id/styles
// // TODO JOIN WITH PHOTOS AND SKUS FOR A GIVEN PRODUCT AND NEST THEM IN EACH STYLE OBJECT + CHANGE ID TO REQ PARAM
// const getStyles = (req, res) => {
//   const product_id = 15
//   const stylesObj = {
//     product_id: product_id,
//     results: []
//   }
//   pool.query(`SELECT * FROM styles WHERE product_id = ${product_id}`)
//     // .then((results) => { console.log('product id result: ', results.rows); res.send(results.rows) })
//     .then((results) => {
//       results.rows.forEach((row) => {
//         let styleObj = {
//           style_id: row.id,
//           name: row.name,
//           original_price: row.original_price,
//           sale_price: row.sale_price === 'null' ? '0' : row.sale_price,
//           'default?': row.default_style === '1' ? true : false,
//           photos: [],
//           skus: {}
//         }
//         stylesObj.results.push(styleObj);
//       })
//       console.log('styles object: ', stylesObj)
//     })
//     .catch((err) => { console.log('error:', err); res.send(err) })
// }

// GET /products/:product_id/related Returns the id's of products related to the product specified.
const getRelated = (req, res) => {
  const product_id = 15;
  const relatedArray = [];
  pool.query(`SELECT related_product_id FROM related WHERE current_product_id = ${product_id}`)
  .then((results) => {
    results.rows.forEach((row) => {
      relatedArray.push(row.related_product_id)
    })
    console.log('related products: ', relatedArray)
  })
  .catch((err) => { console.log('error:', err); res.send(err) })
}
getRelated();