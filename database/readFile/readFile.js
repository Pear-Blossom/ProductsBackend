const readline = require('readline');
const fs = require('fs');
const path = require('path');
const db = require('../models/index.js');
const transform = require('../transform/index.js');

const file = path.resolve('api_data_seed/styles.csv'); //styles currently
const reviewsInterface = readline.createInterface({
  input: fs.createReadStream(file)
});

reviewsInterface.on('line', line => {
  if (line.split(',')[0] !== 'id') {
    const currentLine = transform.styles(line)
    console.log(`current style name ${currentLine.name}`)
    console.log(`current style price ${currentLine.original_price}`)
    console.log(`current style sale ${currentLine.sale_price}`)
    console.log(`current style default? ${currentLine["default?"]}`)

    console.log(`current line ${currentLine}`)
  }
});

reviewsInterface.on('close', () => {
  reviewsInterface.close();
  reviewsInterface.removeAllListeners();
  console.log(`done`);
});