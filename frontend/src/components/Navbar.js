// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        E-commerce Website
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login/Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/google-auth" className="nav-link">
            Google
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
