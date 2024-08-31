import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities, [id]: prevQuantities[id] + delta };
      if (newQuantities[id] <= 0) {
        removeFromCart(id);
        delete newQuantities[id];
      }
      return newQuantities;
    });
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * (quantities[item.id] || 1), 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4">
              <img
                src={item.images[0] || 'https://via.placeholder.com/50'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">${(item.price * (quantities[item.id] || 1)).toFixed(2)}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="mx-2">{quantities[item.id] || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Go to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
