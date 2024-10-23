import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/Home";
import BookingSection from "./components/BookingPage/BookingSection";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const restName = "Little Lemon";
  const country = "Chicago";
  const address = "123 Citrus Avenue, Chicago, IL 60601";
  const phoneNum = "(555) 123-4567";
  const email = "info@littlelemon.com";
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                restName={restName}
                country={country}
                address={address}
                phoneNum={phoneNum}
                email={email}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={<UnderConstruction message="About" />}
          ></Route>
          <Route
            path="/menu"
            element={<UnderConstruction message="Menu" />}
          ></Route>
          <Route
            path="/reservations"
            element={
              <BookingSection
                restName={restName}
                country={country}
                address={address}
                phoneNum={phoneNum}
                email={email}
              />
            }
          ></Route>
          <Route
            path="/order-online"
            element={<UnderConstruction message="Order Online" />}
          ></Route>
          <Route
            path="/login"
            element={<UnderConstruction message="Login" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
