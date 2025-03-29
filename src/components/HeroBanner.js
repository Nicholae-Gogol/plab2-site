// src/components/HeroBanner.js
import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img
        src="/Images/banner.png"   // Make sure file is in public/images/banner.jpg
        alt="Banner"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Welcome to UKMLA Companion</h1>
        <p>Your structured, smart approach to mastering the PLAB 2 exam</p>
      </div>
    </section>
  );
};

export default HeroBanner;





