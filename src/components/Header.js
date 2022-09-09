import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useContextGlobal } from "../context/context";
import data from "../context/data";
import Loading from "./Loading";
const Header = () => {
  // const { activeSlide } = useContextGlobal();
  // console.log(activeSlide.img);
  // const { img, desc } = activeSlide;
  // console.log(activeSlide);
  // console.log(data[s0].img);
  return (
    <header className="hero">
      <div
        className="hero-section"
      >
        <div className="hero-container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
