import React from 'react'
import ProductItem from './ProductItem'


const ProductList = () => {
    const Products = [
        {
            id: 1,
            name: "Mens Cotton Jacket", 
            image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop in the padded sleeve.",
            category:"men's clothing" 
        },
        {
            id: 2,
            name: "Mens Casual Premium Slim Fit T-Shirts", 
            image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            category:"men's clothing" 
        },

        {
            id: 3,
            name: "Opna Women's Short Sleeve Moisture",
            image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            price: 7.99,
            description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, more feminine silhouette and Added Comfort",
            category: "women's clothing"
        },
        {
            id: 4,
            name: "DANVOUY Womens T Shirt Casual Cotton Short",
            image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" ,
            price: 12.99,
            description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
            category: "women's clothing"
        },
        {
            id: 5,
            name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            price: 657,
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection." ,
            category: "jewelery"
        },
        {
            id: 6,
            name: "Solid Gold Petite Micropave",
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" ,
            price: 168,
            description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days." ,
            category: "jewelery"  
        }
    ]

  return (
    <div className="directory">
         {Products.map((product)=> <ProductItem key={product.id} product={product}/>)}
      
    </div>
  )
}

export default ProductList

