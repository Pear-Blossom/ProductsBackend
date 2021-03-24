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
const getProducts = () => {
  Product.find({id: 5})
    .then((results) => {
      console.log('products query: ', results)
    })
    .catch((err) => {
      console.log('error fetching data: ', err)
    })
}

const getFeatures = () => {
  Features.find({id: 5})
    .then((results) => {
      console.log('results of feature query: ', results)
    })
    .catch((err) => {
      console.log('error fetching data: ', err)
    })
}

getFeatures()
getProducts()
module.exports.getProducts = getProducts;
module.exports.getFeatures = getFeatures;
