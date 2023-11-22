import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
