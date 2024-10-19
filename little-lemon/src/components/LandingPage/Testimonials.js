import React from "react";
import "../../styles/Testimonials.css";

const Testimonials = ({ custName, photo, rating, review }) => {
  const MAX_RATING = 5;
  const filledStars = "★".repeat(rating); // Create filled stars
  const emptyStars = "☆".repeat(MAX_RATING - rating); // Create empty stars

  return (
    <div class="testimonial-card">
      <div className="photo">
        <img src={photo} alt={custName} />
      </div>
      <div className="review">"{review}"</div>
      <div className="name">
        <h2>{custName}</h2>
      </div>
      <div className="rating">
        {filledStars}
        {emptyStars}
      </div>
    </div>
  );
};

export default Testimonials;
