// server/src/controllers/productController.ts
import { Request, Response } from 'express';
import { products } from '../models/dummyData';

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};