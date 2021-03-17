const mongoose = require('../index.js');

/*
Fields:
id: style id
productId: id of product style relates to
name: style name
sale_price: sale price if on sale, else null
original_price: default price
default_style: 1 for true, 0 for false
*/

const stylesSchema = mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  default: Boolean,
  photos: Array,
  skus: Object
});

const styles = mongoose.model('Styles', stylesSchema);

// any functionality here

module.exports.styles = styles;