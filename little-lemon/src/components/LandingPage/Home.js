import React from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import Footer from "../Footer";

function Home({ restName, country, address, phoneNum, email }) {
  return (
    <>
      <HeroSection restName={restName} country={country} />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection
        restName={restName}
        country={country}
        year="2010"
        founderName="Maria Rossi"
      />
      <Footer address={address} phoneNum={phoneNum} email={email} />
    </>
  );
}

export default Home;
