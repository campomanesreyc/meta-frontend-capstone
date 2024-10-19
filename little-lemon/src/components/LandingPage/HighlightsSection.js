import React from "react";
import "../../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import MenuHighlights from "./MenuHighlights";
import dish1 from "../../images/menu-highlight1.jpg";
import dish2 from "../../images/menu-highlight2.jpg";
import dish3 from "../../images/menu-highlight3.jpg";

function HighlightsSection() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/menu");
  };

  const menu = [
    {
      id: 1,
      image: dish1,
      title: "Greek Salad",
      description:
        "A vibrant mix of cucumbers, tomatoes, green peppers, onions, olives, and feta cheese, tossed in olive oil. This refreshing salad offers a deliciously light and healthy meal option with Mediterranean flavors.",
      price: "$29.99",
    },
    {
      id: 2,
      image: dish2,
      title: "Bruschetta",
      description:
        "Grilled bread topped with a fresh mixture of tomatoes, garlic, basil, and olive oil. This classic Italian appetizer combines crunchy texture and flavorful toppings, perfect for starting any meal with a burst of flavor.",
      price: "$39.99",
    },
    {
      id: 3,
      image: dish3,
      title: "Penne Pasta",
      description:
        "Penne pasta with a rich tomato sauce and grilled vegetables. This hearty, comforting dish is a classic Italian favorite, offering a perfect balance of wholesome ingredients and robust flavor for pasta lovers.",
      price: "$49.99",
    },
  ];

  return (
    <section className="highlights">
      <div className="grid-item">
        <h1>Specials</h1>
      </div>
      <div className="grid-item button-container">
        <button onClick={handleRedirect} className="btn-menu">
          Online Menu
        </button>
      </div>
      <div className="grid-item">
        {menu.map((product) => (
          <MenuHighlights key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;
