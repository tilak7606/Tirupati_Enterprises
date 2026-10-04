import React from "react";


function Contact() {
  function handleSubmit(event) {
    document.getElementById("myForm").reset();   
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
  }

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Contact us for wholesale vegetable enquiries and orders.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Contact Us</span>
            <h2>We'd Love to Hear From You</h2>

            <div className="contact-item">
              <h3>Address</h3>
              <p>Sikandrabad,203205,UttarPradesh</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>9720491721</p>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <p>Kishanrawat131@gmail.com</p>
            </div>
          </div>

          <form className="contact-form" id="myForm" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>

            <label>
              Phone
              <input type="tel" placeholder="Your phone number" required />
            </label>

            <label>
              Email
              <input type="email" placeholder="Your email address" required />
            </label>

            <label>
              Message
              <textarea rows="5" placeholder="Write your message..." required></textarea>
            </label>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Find Us</span>
            <h2>Google Maps</h2>
            <p>Replace the placeholder below with your Google Maps embed.</p>
          </div>

          <div className="map-placeholder">
            <p>Google Maps Placeholder</p>
            <span>Add your Google Maps iframe here later.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;