import React from 'react';
import heroImg from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Unifying Family Finances Across Ages & Borders</h1>
        <p>A multi‑generation digital wallet connecting kids, teens, adults, and seniors—across Canada, U.S., and Mexico.</p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">Get Started</a>
          <a href="#" className="btn-secondary">Download App</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Family illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
