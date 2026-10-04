import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>TIRUPATI ENTERPRISES</h3>
          <p>
            Your trusted partner for fresh and quality vegetables at wholesale prices.
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Phone: 9720491721</p>
          <p>Email: Kishanrawat131@gmail.com</p>
          <p>Address: Sikandrabad,203205,Uttarpradesh,India</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>TIRUPATI ENTERPRISES 2026 . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;