const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Products', { useNewUrlParser: true, useUnifiedTopology: true });

// Schemas
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String
})

const featuresSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  feature: String,
  value: String
})

const stylesSchema = new mongoose.Schema({
})

const photosSchema = new mongoose.Schema({
})

const skusSchema = new mongoose.Schema({
})

const relatedSchema = new mongoose.Schema({
})


// Models
const Product = mongoose.model('product', productSchema, 'product');
const Features = mongoose.model('features', featuresSchema);
const Styles = mongoose.model('styles', stylesSchema);
const Photos = mongoose.model('photos', photosSchema);
const Skus = mongoose.model('skus', skusSchema);
const Related = mongoose.model('related', relatedSchema, 'related');


// Queries
// GET /products
// TODO: ADD QUERY INT AND RES.SEND TO THEN AND CATCH
const getProducts = (req, res) => {
  // let page = parseInt(req.query.page) || 1;
  // let count = parseInt(req.query.count) || 5;
  let page = 1;
  let count = 5;
  const limit = page * count
  Product.find({}).sort({id: 1}).limit(limit)
    .then((results) => {
      let resultsArr = []
      results.forEach((product) => {
        let productObj = {
          id: product.id,
          name: product.name,
          slogan: product.slogan,
          description: product.description,
          category: product.category,
          default_price: product.default_price
        }
        resultsArr.push(productObj)
      })
      console.log('products query: ', resultsArr)
    })
    .catch((err) => {
      console.log('error fetching data: ', err)
    })
}

// GET /products/:product_id
const getFeatures = () => {
  Features.find({ id: 5 })
    .then((results) => {
      console.log('results of feature query: ', results)
    })
    .catch((err) => {
      console.log('error fetching data: ', err)
    })
}

// GET /products/:product_id/styles

// GET /products/:product_id/related

getFeatures()
getProducts()
module.exports.getProducts = getProducts;
module.exports.getFeatures = getFeatures;
