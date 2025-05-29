// client/src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Eclypse Store
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;