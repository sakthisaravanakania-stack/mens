import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleaddToCart = () => {
    dispatch(addToCart(product));
  }
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={product.image} alt={product.image} />
      </div>

      <div className='product-title'>
        <h2>{product.title }</h2>
      </div>

      <div className='product-price'>
        <h3>Rs. {product.price }</h3>
      </div>

      <div className='product-category'>
        <h4>{product.category }</h4>
      </div>

      <div className='product-btn'>
        <button onClick={handleaddToCart}>AddToCart</button>
      </div>
    </div>
  )
}

export default ProductCard