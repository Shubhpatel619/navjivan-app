import React from 'react';
import './pages.css';

const About = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About Navjivan School</h1>
          <p>A legacy of excellence, rooted in values.</p>
        </div>
      </div>
      
      <section className="section container">
        <div className="about-content grid-2-col">
          <div className="about-text">
            <h2>Our History</h2>
            <div className="title-underline-left"></div>
            <p>
              Founded with a vision to provide accessible, high-quality education, Navjivan English Medium School has been a cornerstone of the community...
            </p>
            <p>
              We believe in nurturing not just academic excellence, but moral integrity and community responsibility. Over the years, we have grown into a modern institution equipped with advanced facilities to cater to the evolving needs of education.
            </p>
          </div>
          <div className="about-image glass">
            {/* Placeholder Image container */}
            <div className="image-placeholder">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" alt="Students in classroom" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-light">
        <div className="container grid-2-col">
          <div className="vision-box glass">
            <h3>Our Vision</h3>
            <p>To be an institution of excellence that empowers students to become globally conscious, critical thinkers, and socially responsible citizens.</p>
          </div>
          <div className="primary-box">
            <h3>Our Mission</h3>
            <p>To provide a stimulating learning environment, foster the intellectual, physical, and emotional growth of the student, and inspire a lifelong love for learning.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
