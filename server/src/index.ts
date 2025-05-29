import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(cors());  // CORS middleware important hai

app.use('/api/products', productRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
