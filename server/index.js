// Requirements and imports
const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const axios = require('axios');
const app = express();
const port = 3000;
const db = require('../database_postgres/index.js')
// const db = require('../database_mongo')

// Middleware
// app.use(morgan('tiny'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// Routing
app.get('/products', db.getProducts)
app.get('/products/:product_id', db.getProductById)
app.get('/products/:product_id/styles', db.getStyles)
app.get('/products/:product_id/related', db.getRelated)

// Listener
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
