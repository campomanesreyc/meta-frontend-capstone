import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/Home";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                restName="Little Lemon"
                country="Chicago"
                address="123 Citrus Avenue, Chicago, IL 60601"
                phoneNum="(555) 123-4567"
                email="info@littlelemon.com"
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
