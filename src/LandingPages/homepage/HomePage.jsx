import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardsContainer from "./CardsContainer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CardsContainer/>
    </div>
  );
};

export default HomePage;