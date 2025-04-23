import React from "react";
// import { Route,Routes,Br } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardsContainer from "./CardsContainer";

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CardsContainer/>
      </>
    </div>
  );
};

export default HomePage;