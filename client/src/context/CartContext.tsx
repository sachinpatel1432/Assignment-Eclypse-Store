// client/src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types/Product'; // Assuming Product type is defined

// Define the type for a cart item (product + quantity)
interface CartItem extends Product {
  quantity: number;
}

// Define the shape of your cart context value
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  // You might add updateCartItemQuantity, etc.
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cart from localStorage or as an empty array
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existItem = prevItems.find((item) => item.id === product.id);

      if (existItem) {
        // If item exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // If item is new, add it to the cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};