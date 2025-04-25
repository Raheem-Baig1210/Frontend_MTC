import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardsContainer from "./CardsContainer";
import Intro from "./intro";
import VideosSection from "./Videos_Section";

const HomePage = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <CardsContainer/>
      <br />
      <br />
      <br />

      <Intro/>
      <VideosSection/>

    </div>
    </>
  );
};

export default HomePage;