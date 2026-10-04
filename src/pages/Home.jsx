import React from "react";


import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Potato",
    image: "/images/aloo.jpg",
    description: "Fresh quality potatoes suitable for wholesale supply."
  },
  {
    name: "Onion",
    image: "/images/onion.jpg",
    description: "Quality onions sourced for regular business requirements."
  },
  {
    name: "Tomato",
    image: "/images/download.jpg",
    description: "Fresh tomatoes supplied in quantities according to your needs."
  },
  {
    name: "Cabbage",
    image: "/images/cabage.jpg",
    description: "Fresh and carefully selected cabbage for wholesale buyers."
  },
  {
    name: "Cauliflower",
    image: "/images/ghobi.jpg",
    description: "Quality cauliflower available for bulk orders."
  },
  {
    name: "Carrot",
    image: "/images/carrot.jpg",
    description: "Fresh carrots with reliable wholesale availability."
  },
  {
    name: "Garlic",
    image: "/images/lehsun.jpg",
    description: "Fresh garlic with reliable wholesale availability."
  },
  {
    name: "Bitterguard",
    image: "/images/karlea.jpg",
    description: "Fresh Bitterguard with reliable wholesale availability."
  },  
  {
    name: "Capcicum",
    image: "/images/capcicum.jpg",
    description: "Fresh capcicum with reliable wholesale availability."
  },
  {
    name: "Green Chilli",
    image: "/images/mirchi.jpg",
    description: "Fresh Green Chilli with reliable wholesale availability."
  },
  {
    name: "Beans",
    image: "/images/beans.jpg",
    description: "Fresh beans with reliable wholesale availability."
  },
  {
    name: "Lady Finger",
    image: "/images/bhindi.jpg",
    description: "Fresh Lady Finger with reliable wholesale availability."
  },
  {
    name: "Branjle",
    image: "/images/branjle.jpg",
    description: "Fresh branjle with reliable wholesale availability."
  },
  {
    name: "Corriender",
    image: "/images/dhaniya.jpg",
    description: "Fresh Corriender with reliable wholesale availability."
  },
  {
    name: "Beatroot",
    image: "/images/red.jpg",
    description: "Fresh beatroot with reliable wholesale availability."
  },

];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Fresh • Quality • Reliable</span>
            <h1>Fresh and Frozen Vegetables Supplier</h1>
            <p>
              We supply fresh and quality vegetables to retailers, restaurants,
              hotels and businesses with dependable wholesale service.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>

          {/* Replace this path with your main hero vegetable image */}
          <div className="hero-image">
            <img src="/images/many.webp" alt="Fresh vegetables" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            {/* <span className="eyebrow">Our Gallery</span> */}
            <h2>Our Frozen Products</h2>
            
          </div>

          <div className="gallery-grid">
            <img src="/images/frozon mix.jpg" alt="Vegetable 1" />
            <img src="/images/frozen_sweetcorn.webp" alt="Vegetable 2" />
            <img src="/images/frozen matar.jpg" alt="Vegetable 3" />
            <img src="/images/Frozen-Carrot.webp" alt="Vegetable 4" />
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Products</span>
            <h2>Vegetables We Supply</h2>
            <p>These names and descriptions are placeholders that you can edit.</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why Us</span>
            <h2>Why Choose Us?</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Fresh Quality</h3>
              <p>Fresh vegetables selected with quality and consistency in mind.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">₹</div>
              <h3>Wholesale Prices</h3>
              <p>Competitive pricing for retailers and bulk buyers.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↗</div>
              <h3>Reliable Supply</h3>
              <p>Dependable supply for regular and bulk business requirements.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">→</div>
              <h3>Timely Delivery</h3>
              <p>Focused on convenient and timely delivery for our customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <div>
            <span className="eyebrow">Let's Work Together</span>
            <h2>Looking for Fresh Vegetables at Wholesale Prices?</h2>
            <p>Get in touch with us for your wholesale vegetable requirements.</p>
          </div>

          <Link to="/contact" className="btn btn-white">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;