import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MenuHighlights.css";

const MenuHighlights = ({ image, title, description, price }) => {
  return (
    <div className="highlight-card">
      <img src={image} alt={title} />
      <div className="highlight-content">
        <div className="info">
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <p>{description}</p>
        <Link to="/order-online" className="order-link">
          Order a Delivery &#10230;
        </Link>
      </div>
    </div>
  );
};

export default MenuHighlights;
