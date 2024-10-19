import "../styles/Footer.css";
import logoFooter from "../images/logo-footer.png";
import { Link } from "react-router-dom";

function Footer({ address, phoneNum, email }) {
  return (
    <footer className="footer">
      <div className="grid-item logo">
        <img src={logoFooter} alt="logo"></img>
      </div>
      <div className="grid-item quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="grid-item contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <span>Address:</span> {address}
          </li>
          <li>
            <span>Phone Number:</span> {phoneNum}
          </li>
          <li>
            <span>Email:</span> {email}
          </li>
        </ul>
      </div>
      <div className="grid-item social-media">
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/explore">TikTok</a>
          </li>
          <li>
            <a href="https://www.youtube.com/">YouTube</a>
          </li>
          <li>
            <a href="https://x.com/">X</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
