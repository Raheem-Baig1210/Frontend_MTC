import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardsContainer from "./CardsContainer";
import Intro from "./intro";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
  
      <Hero/>
      <CardsContainer/>
      <br />
      <br />
      <br />

      <Intro/>

    </div>
  );
};

export default HomePage;