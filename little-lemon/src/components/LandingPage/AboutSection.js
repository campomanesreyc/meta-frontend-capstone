import aboutPhoto from "../../images/about-photo.png";

function AboutSection({ restName, country, year, founderName }) {
  return (
    <section className="about">
      <div className="grid-item">
        <h1>About {restName}</h1>
        <h2>{country}</h2>
        <br />
        <h2>Welcome to {restName}!</h2>
        <p>
          At Little Lemon, we believe in the power of fresh ingredients and the
          joy of sharing good food with good company. Located in the heart of
          Chicago, our cozy restaurant invites you to experience a culinary
          journey that celebrates the vibrant flavors of Mediterranean cuisine.
        </p>
        <h2>Our Story</h2>
        <p>
          Little Lemon was founded in {year} by {founderName}, a passionate chef
          with roots in Mediterranean cooking. Inspired by family recipes passed
          down through generations, we aim to create dishes that bring warmth
          and happiness to every table. Our commitment to quality and
          sustainability drives us to source the freshest local ingredients,
          ensuring that every meal is not only delicious but also
          environmentally responsible.
        </p>
      </div>
      <div className="grid-item">
        <img src={aboutPhoto} alt="about" />
      </div>
    </section>
  );
}

export default AboutSection;
