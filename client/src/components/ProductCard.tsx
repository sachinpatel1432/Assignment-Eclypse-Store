// client/src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-48 h-48 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      </Link>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-gray-700">{product.rating} ({product.numReviews})</span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;