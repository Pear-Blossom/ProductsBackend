const readline = require('readline');
const fs = require('fs');
const path = require('path');
const db = require('../models/index.js');
const transform = require('../transform/index.js');

const file = path.resolve('api_data_seed/photos.csv');
const reviewsInterface = readline.createInterface({
  input: fs.createReadStream(file)
});

reviewsInterface.on('line', line => {
  if (line.split(',')[0] !== 'id') {
    if (line.split('')[line.length - 1] !== '"') {
      console.log('error on this line!')
      console.log(line + '"')
    }
    // console.log(line.split('')[line.length - 1]);
  }
});

reviewsInterface.on('close', () => {
  reviewsInterface.close();
  reviewsInterface.removeAllListeners();
  console.log(`done`);
});