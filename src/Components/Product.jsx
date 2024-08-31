import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={product.images[0] || 'https://via.placeholder.com/150'} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

