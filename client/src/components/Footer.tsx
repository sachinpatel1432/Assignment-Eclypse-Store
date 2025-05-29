// client/src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Eclypse Store. All rights reserved.</p>
        <p>Designed with ❤️ by Sachin Patel</p>
      </div>
    </footer>
  );
};

export default Footer;