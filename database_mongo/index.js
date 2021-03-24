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
  id: Number,
  productId: Number,
  name: String,
  original_price: String,
  sale_price: String,
  default_style: String,
})

const photosSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  thumbnail_url: String,
  url: String
})

const skusSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
})

const relatedSchema = new mongoose.Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number
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
  Product.find({}).sort({ id: 1 }).limit(limit)
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
// TODO: DYNAMIC PRODUCT ID, RES SEND
const getProductById = (req, res) => {
  // const id = req.params.product_id
  const id = 100;
  let productObj = {
    id: Number(id),
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    features: []
  }
  Promise.all([Product.find({ id: id }), Features.find({ product_id: id })])
    .then((values) => {
      let currentProduct = values[0][0];
      let currentFeatures = values[1];

      productObj.name = currentProduct.name
      productObj.slogan = currentProduct.slogan
      productObj.description = currentProduct.description
      productObj.category = currentProduct.category
      productObj.default_price = currentProduct.default_price

      currentFeatures.forEach((feature) => {
        if (feature.value !== 'null') {
          let featureObj = {
            feature: feature.feature,
            value: feature.value
          }
          productObj.features.push(featureObj)
        }
      })
      console.log('product object: ', productObj)
    })
    .catch((err) => { console.log('err in promise all: ', err) })
}

// GET /products/:product_id/styles
const getStyles = (req, res) => {
  // const product_id = req.params.product_id
  const product_id = 15;
  let resultsObj = {
    product_id: product_id,
    results: []
  }
  let styleObjects = [];
  let done = 0;
  Styles.find({ productId: product_id })
    .then((results) => {
      done = results.length
      results.forEach(async(result) => {
        let resultObj = {
          style_id: result.id,
          name: result.name,
          original_price: result.original_price,
          sale_price: result.sale_price === 'null' ? '0' : result.sale_price,
          'default?': result.default_style === '1' ? true : false,
          photos: [],
          skus: {}
        }
        const values = await Promise.all([Photos.find({ styleId: result.id }), Skus.find({ styleId: result.id })])
            let photos = values[0]
            let skus = values[1]
            photos.forEach((photo) => {
              let photoObj = {
                thumbnail_url: photo.thumbnail_url,
                url: photo.url
              }
              resultObj.photos.push(photoObj)
            })
            skus.forEach((sku) => {
              let skuObj = {
                quantity: sku.quantity,
                size: sku.size
              }
              resultObj.skus[sku.id] = skuObj
            })
            resultsObj.results.push(resultObj)

            if (resultsObj.results.length === done) {
              console.log('final results object: ', resultsObj)
            }
      })
      console.log('style objects: ', styleObjects)
    })
}

// GET /products/:product_id/related
// TODO: DYNAMIC PRODUCT ID AND RES SEND
const getRelated = (req, res) => {
  // const product_id = parseInt(req.params.product_id);
  const product_id = 1;
  const relatedArray = [];
  Related.find({ current_product_id: product_id })
    .then((results) => {
      results.forEach((result) => {
        relatedArray.push(result.related_product_id)
      })
      console.log('related array: ', relatedArray)
    })
    .catch((err) => { console.log('err getting related products: ', err) })
}

getStyles();
module.exports.getProducts = getProducts;

