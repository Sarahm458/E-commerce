import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-gray-300">
            Checkout
          </Link>
          <Link to="/orders" className="hover:text-gray-300">
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
