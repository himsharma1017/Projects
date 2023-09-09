// routes.js
const express = require('express');
const productRouter = express.Router();
const productController = require('../Controllers/product.controller');
const bcrypt = require('bcrypt');

const router = express.Router();

// Middleware to hash password before saving to the database
const hashPassword = async (req, res, next) => {
  try {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

productRouter.get('/products/products',getAllProducts);
productRouter.post('/products/new', hashPassword,createProduct);
productRouter.get('/products/:id',getProductById);
productRouter.get('/products/category/:category',getProductsByCategory);

module.exports = productRouter;
