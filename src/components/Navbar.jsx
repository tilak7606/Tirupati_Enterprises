import { Link, NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          TIRUPATI ENTERPRISES
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;