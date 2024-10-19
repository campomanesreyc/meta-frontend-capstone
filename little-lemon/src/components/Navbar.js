import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="nav-link">
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className="nav-link">
              RESERVATIONS
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-online" className="nav-link">
              ORDER ONLINE
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link">
              LOGIN
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
