import React from "react";
import "./HeroSection.css";

import junho from "../../../../assets/images/general/junho-hero-h.jpg"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Lee Junho</span>'s World
        </h1>
        <p className="hero-subtitle">
          Explore the life, achievements, and updates of your favorite artist and actor.
        </p>
        <div className="hero-buttons">
          <a href="/donate" className="button primary">
            Donate
          </a>
          <a href="/meet-lee" className="button secondary">
            Meet Lee
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={junho}
          alt="Lee Junho"
        />
      </div>
    </div>
  );
};

export default HeroSection;