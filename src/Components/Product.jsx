import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
