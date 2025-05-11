import React from "react";
import data from "../data/heroData.json";
import '../styles/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <span className="badge">{data.badge}</span> */}
        <h1>
          <span className="simple-text">{data.titlePart1}</span> <span className="gradient-text">{data.titlePart2}</span>
        </h1>
        <p>{data.description}</p>
        <button className="cta-button">{data.buttonText} </button>
      </div>
    </section>
  );
};

export default HeroSection;