// backend/routes/productRoutes.ts
import express from 'express';
import products from '../data/products'; // Assuming products is an array of Product objects

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res) => {
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', (req, res) => { // <-- ADD THIS ROUTE
  const productId = req.params.id; // Get the ID from the URL parameter

  // Find the product in your data by its ID
  // Make sure product.id is a string if productId is a string
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product); // Send the found product
  } else {
    // If product not found, send a 404 response
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router;