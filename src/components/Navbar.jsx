import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
