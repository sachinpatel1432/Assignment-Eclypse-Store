import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../api/api';
import { Product } from '../types/Product';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get<Product[]>('/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-8 p-4 text-xl font-semibold text-gray-700">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-8 p-4 text-xl text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  // Direct images for categories
  const categories = [
    { name: 'Phones', img: 'https://images.unsplash.com/photo-1512149673953-1e251807ec7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGhvbmVzfGVufDB8fDB8fHww' },
    { name: 'Wearables', img: 'https://images.unsplash.com/photo-1596236100223-f3c656de3038?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2VhcmFibGVzfGVufDB8fDB8fHww' },
    { name: 'Audio', img: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVkaW98ZW58MHx8MHx8fDA%3D' },
    { name: 'Smart Home', img: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnQlMjBIb21lfGVufDB8fDB8fHww' }
  ];

  // Direct images for trending products
  const trending = [
    { name: 'Drone', img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJvbmVzfGVufDB8fDB8fHww' },
    { name: 'VR Headset', img: 'https://plus.unsplash.com/premium_photo-1711508493619-bb60b137a7c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VlIlMjBIZWFkc2V0fGVufDB8fDB8fHww' },
    { name: 'Smart Light', img: 'https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBMaWdodHxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Portable Speaker', img: 'https://images.unsplash.com/photo-1657676845636-3de6282ea59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBvcnRhYmxlJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D' }
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* --- Hero Section --- */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-80"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-6 animate-fadeInDown">
            Revolutionize Your Lifestyle
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto drop-shadow-md">
            Premium gadgets, smart products, and exclusive deals tailored just for you.
          </p>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* --- Category Section --- */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16">
          {categories.map(({ name, img }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Shop category ${name}`}
            >
              <img
                src={img}
                alt={name}
                className="mx-auto mb-4 w-24 h-24 object-cover rounded-lg"
                loading="lazy"
              />
              <p className="font-semibold text-lg">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Product Section --- */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* --- Trending Products --- */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
          {trending.map(({ name, img }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-5 text-center rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Trending product ${name}`}
            >
              <img
                src={img}
                alt={name}
                className="mb-3 mx-auto w-full h-40 object-cover rounded-md"
                loading="lazy"
              />
              <p className="font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Features --- */}
      <section className="bg-indigo-700 text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">Free Shipping</h4>
            <p>On all orders above ₹499.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">Easy Returns</h4>
            <p>7-day hassle-free return policy.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">Secure Checkout</h4>
            <p>100% secure payments & data protection.</p>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Excellent product range!', 'Lightning-fast delivery!', 'Great customer support!'].map((quote, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              role="region"
              aria-label={`Testimonial from customer ${idx + 1}`}
            >
              <p className="italic text-gray-700 mb-4">"{quote}"</p>
              <p className="text-gray-600 font-semibold">— Customer {idx + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Signup --- */}
      <section className="bg-indigo-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Eclypse Store</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Get updates on latest deals and upcoming product launches.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 w-full sm:w-2/3"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* --- Contact CTA --- */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          We're here to assist you with product questions, orders, and more.
        </p>
        <button
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          aria-label="Contact Us"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default HomePage;
