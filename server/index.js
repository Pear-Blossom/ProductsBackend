// Requirements and imports
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;
const db = require('../database_postgres/index.js')

// Middleware
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routing
app.get('/products', db.getProducts)
app.get('/products/:product_id', db.getProductById)
app.get('/products/:product_id/styles', db.getStyles)
app.get('/products/:product_id/related', db.getRelated)

// Listener
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

// will listen for GET requests on four endpoints:
// GET /products Retrieves the list of products.
// GET /products/:product_id Returns all product level information for a specified product id.
// GET /products/:product_id/styles Returns the all styles available for the given product.
// GET /products/:product_id/related Returns the id's of products related to the product specified.
// refer to https://learn-2.galvanize.com/cohorts/2480/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md for more information
