import React from "react";

function About() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Who We Are</span>
          <h1>About Us</h1>
          <p>Learn more about our vegetable wholesale business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            {/* Replace with your own business image */}
            <img src="/images/many.webp" alt="Our vegetable business" />
          </div>

          <div className="about-content">
            <span className="eyebrow">About Our Business</span>
            <h2>Fresh Produce. Trusted Service.</h2>
            <p>
              Tirupati Enterprises is a leading wholesale fruits and vegetables supplier serving the HoReCa industry across Delhi NCR. With years of experience in produce supply chain management, we understand what professional kitchens need — consistency, quality, and reliability.
             
            </p>
            <p>
              Our direct sourcing from farms networks ensures the freshest produce at wholesale prices.
            </p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container two-column-section">
          <div className="info-box">
            <span className="eyebrow">Our Mission</span>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide fresh, high-quality vegetables at competitive wholesale prices while building long-term relationships with our customers. We are committed to maintaining quality, reliability, and timely supply in every order.
            </p>
          </div>

          <div className="info-box">
            <span className="eyebrow">Our Values</span>
            <h2>Our Values</h2>
            <p>
            We believe in quality, honesty, reliability, and customer satisfaction. We carefully focus on the freshness of our products and strive to provide dependable service to every customer we work with.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;