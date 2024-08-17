import React from 'react'

const ProductItem = ({ product}) => {
  return (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p className="price">{product.price}$</p>
  </div>
  )
}

export default ProductItem
