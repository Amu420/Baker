// src/components/ProductCard.js
import React from "react";

function ProductCard({ name, price, weight, img }) {
  return (
    <div className="card-product">
      <h5>{name}</h5>
      <p>Price: ₹{price}</p>
      <p>Weight: {weight}</p>
      <img src={img} alt={name} className="img-fluid" loading="lazy" />
      <button className="btn btn-dark mt-3">Add To Cart</button>
    </div>
  );
}

export default ProductCard;
