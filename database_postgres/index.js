const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "products"
});

client.connect()

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
  client.query(`SELECT * FROM products LIMIT ${limit}`)
    .then((results) => { console.log('results: ', results.rows); res.send(results.rows) })
    .catch((err) => { res.send(err) })
}

// GET /products/:product_id Returns all product level information for a specified product id.
// GET /products/:product_id/styles Returns the all styles available for the given product.
// GET /products/:product_id/related Returns the id's of products related to the product specified.