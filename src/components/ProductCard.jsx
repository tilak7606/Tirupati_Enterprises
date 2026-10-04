
import React from "react";

function ProductCard({ name, description, image }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <div className="product-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProductCard;