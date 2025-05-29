// client/src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api'; // Ensure this path is correct
import { Product } from '../types/Product'; // Ensure this path is correct

const ProductDetailPage: React.FC = () => {
  // Get the product ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // State to hold product data, loading status, and any errors
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Start loading
        setError(null);   // Clear any previous errors

        // Make an API call to fetch the product by ID
        // Explicitly type the expected response data as Product
        const { data } = await api.get<Product>(`/products/${id}`);
        setProduct(data); // Set the fetched product data
      } catch (err) {
        // Handle errors during API call
        setError('Failed to fetch product details. Please try again.');
        console.error("Error fetching product:", err); // Log the full error for debugging
      } finally {
        setLoading(false); // End loading regardless of success or failure
      }
    };

    // Only fetch if an ID is present in the URL
    if (id) {
      fetchProduct();
    }
  }, [id]); // Re-run effect whenever the 'id' parameter changes

  // --- Render Loading, Error, and Not Found States ---
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-700">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-600">Product not found.</p>
      </div>
    );
  }

  // --- Render Product Details ---
  return (
    <div className="container mx-auto p-4 md:p-8 my-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-xl">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full h-auto rounded-lg object-contain shadow-md"
            style={{ maxHeight: '500px' }} // Limit image height for better layout
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-700 mb-4">${product.price.toFixed(2)}</p>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl mr-2">⭐</span>
            <span className="text-gray-800 text-lg font-semibold">{product.rating}</span>
            <span className="text-gray-600 ml-2">({product.numReviews} reviews)</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed text-base">{product.description}</p>

          <div className="mb-4">
            <span className="font-semibold text-gray-800">Category: </span>
            <span className="text-gray-600">{product.category}</span>
          </div>

          <div className="mb-6">
            <span className="font-semibold text-gray-800">Availability: </span>
            {product.countInStock > 0 ? (
              <span className="text-green-600 font-medium">In Stock ({product.countInStock})</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </div>

          <button
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={product.countInStock === 0}
            // TODO: Add actual Add to Cart functionality here
            onClick={() => console.log(`Adding ${product.name} to cart!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;