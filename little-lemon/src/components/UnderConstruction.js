import React from "react";
import "../styles/UnderConstruction.css";
import errorImg from "../images/error-img.png";

function UnderConstruction({ message }) {
  return (
    <section className="container">
      <div className="grid-item">
        <img src={errorImg} alt="lemon" />
      </div>
      <div className="grid-item">
        <h1>The {message} Page is on Its Way!</h1>
        <p>
          We're building something great on our {message} page, but it’s not
          quite finished yet. Please be patient as we put the final touches on
          it.
        </p>
        <p>
          In the meantime, feel free to explore the rest of our site. Thank you!
        </p>
      </div>
    </section>
  );
}
export default UnderConstruction;
