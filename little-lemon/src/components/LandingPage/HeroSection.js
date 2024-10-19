import React from "react";
import "../../styles/LandingPage.css";
import heroPhoto from "../../images/hero-photo.jpg";
import { useNavigate } from "react-router-dom";

function HeroSection({ restName, country }) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/reservations");
  };

  return (
    <section className="hero">
      <div className="grid-item">
        <h1>{restName}</h1>
        <h2>{country}</h2>
        <p>
          At Little Lemon, we bring the essence of Mediterranean cuisine to
          Chicago. Our dishes are crafted using fresh, locally sourced
          ingredients to deliver bold and authentic flavors. Whether you're
          enjoying a family meal or a night out with friends, our cozy
          atmosphere and warm hospitality make every visit special. From
          delicious starters to signature entrees, we offer a dining experience
          that celebrates tradition while embracing creativity. Join us for an
          unforgettable culinary journey.
        </p>
        <br />
        <button onClick={handleRedirect} className="btn-reserve">
          Reserve a Table
        </button>
      </div>
      <div className="grid-item">
        <img src={heroPhoto} alt="little-lemon-tables" />
      </div>
    </section>
  );
}

export default HeroSection;
