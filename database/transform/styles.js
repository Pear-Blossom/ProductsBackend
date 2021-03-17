const { booleanConverter } = require('./helpers/booleanConverter.js');
const { nullConverter } = require('./helpers/nullConverter.js');

/*
Fields:
id: style id
productId: id of product style relates to
name: style name
sale_price: sale price if on sale, else null
original_price: default price
default_style: 1 for true, 0 for false
*/

/*
Desired Fields:
style_id: number style id
name: string style name
original_price: string default price
sale_price: string "0" if null or "[price]" if on sale
"default?": boolean true or false
photos: array []
skus: object
*/

module.exports = style => {
  const styleArray = style.split(',');

  const styleObj = {
    style_id: styleArray[0],
    name: styleArray[2],
    original_price: styleArray[4],
    sale_price: nullConverter(styleArray[3]),
    "default?": booleanConverter(styleArray[5]),
    photos: [],
    skus: {},
  };

  return styleObj;
};

