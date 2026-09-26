import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total,item)=> total + item.quantity, 0
  )

  return (
    <>
      <div className="header-main"></div>
    <div className="header">
      <h2>TrendWear <i class="fa-regular fa-hand-spock"></i> <br /> <p>MEN'S T-SHIRT STORE <i class="fa-regular fa-star-half"></i></p></h2>
      <h5>Home</h5>
      <h5>All</h5>
      <h5>Printed</h5>
      <h5>Sports</h5>
      <h5>Offers</h5>
      
        <div className="navigation">
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
          <h3><i class="fa-solid fa-cart-shopping"></i>: {cartCount}</h3>
        </Link>
        </div>
      </div>
    </>
    
  )
};

export default Header;


