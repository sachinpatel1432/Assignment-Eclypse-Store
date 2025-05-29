// client/src/types/Product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  numReviews: number;
  category: string;
  countInStock: number;
}