import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductsPage;




