import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty">
        <h3>Your Cart is Empty <i class="fa-solid fa-face-frown"></i></h3>
        <p>Add Some Products To Your Cart <i class="fa-regular fa-face-grin-wink"></i></p>
      </div>
    );
  }

  return (
    <div className="cart">

      <div className="cart-container">
        <h2>Shopping Cart <i class="fa-brands fa-shopify"></i><i class="fa-solid fa-shirt"></i></h2>
        <p>{totalItems} Items in your cart <i class="fa-regular fa-gem"></i></p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
              <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-name">
                <p>Rs. {item.price}</p>
              </div>
              <div className="remove-btn">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id)) }>+</button>
              </div>

              <div className="cart-item-total">
                <div className="total">
                Rs. {item.price * item.quantity}
                </div>
                <div className="cancel">
                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id)) }>  Remove<i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h1><i class="fa-regular fa-eye"></i> Order Summary <i class="fa-solid fa-tag"></i></h1>
            <div className="cart-row">
              <span>Total Items:</span>
              <strong>{totalItems}</strong>
              <span>Total Price:</span>
              <strong>Rs. {totalPrice}</strong>
            </div>
            <div className="clear">
              <button
              onClick={() => dispatch(clearCart())}>Clear Cart <i className="fa-solid fa-broom"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;