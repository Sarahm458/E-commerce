import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './Components/ProductsPage';
import ShoppingCart from './Components/ShoppingCart';
import CheckoutForm from './Components/CheckoutForm';
import OrderHistory from './Components/OrderHistory';
import NavBar from './Components/NavBar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      console.log('Item already in cart:', existingItem);
    } else {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <Router>
      <NavBar />
      <div className="flex justify-center bg-gray-50 min-h-screen">
        <div className="w-full max-w-6xl p-4">
          <Routes>
            <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutForm cartItems={cartItems} clearCart={clearCart} />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
