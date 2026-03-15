import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <span className="hero-badge">Welcome to Excellence</span>
        <h1 className="hero-title">NAVJIVAN <br />English Medium School</h1>
        <p className="hero-subtitle">
          Empowering students to achieve their highest academic and personal potential in a nurturing environment.
        </p>
        <div className="hero-btns">
          <Link to="/admissions" className="btn btn-accent hero-btn">
            Apply Now
          </Link>
          <Link to="/about" className="btn btn-primary hero-btn">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
