const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Products', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;