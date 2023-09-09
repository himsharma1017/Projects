// product.js
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new mongoose.Schema({
  name: 
  { type: String,
     required: true 
  },
  total_qnty: 
  { type: Number, 
    required: true,
    default: 10 },
  category: 
  { type: String,
     required: true },
  price: 
  { type: Number, 
    required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
