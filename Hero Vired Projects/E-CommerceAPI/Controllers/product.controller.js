// productController.js
const Product = require('../Models/product.model');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, total_qnty, category, price } = req.body;

      const product = new Product({
        name,
        total_qnty,
        category,
        price,
      });

      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getProductsByCategory: async (req, res) => {
    try {
      const category = req.params.category;
      const products = await Product.find({ category });
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = productController;
