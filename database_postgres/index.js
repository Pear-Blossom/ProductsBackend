const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

// GET /products Retrieves the list of products.
const getProducts = (req, res) => {
  const page = 1;
  const count = 5;
  if (req) {
    page = parseInt(req.params.page);
  }
  if (req) {
    count = parseInt(req.params.count);
  }
  const limit = page * count
  pool.query(`SELECT * FROM products LIMIT ${limit}`)
    .then((results) => { console.log('product results: ', results.rows); res.send(results.rows) })
    .catch((err) => { res.send(err) })
}

// GET /products/:product_id Returns all product level information for a specified product id.
const getProductById = (req, res) => {
  const id = parseInt(req.params.product_id)
  client.query(`SELECT * FROM products WHERE id = ${id}`)
    .then((results) => { console.log('product id result: ', results.rows); res.send(results.rows) })
    .catch((err) => { res.send(err) })
}
// GET /products/:product_id/styles Returns the all styles available for the given product.
// GET /products/:product_id/related Returns the id's of products related to the product specified.