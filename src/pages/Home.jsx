import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { FaBookReader, FaChalkboardTeacher, FaBasketballBall, FaGlobe } from 'react-icons/fa';
import './pages.css';

const Home = () => {
  const features = [
    {
      id: 1,
      icon: <FaBookReader />,
      title: "Excellence in Academics",
      description: "Our comprehensive curriculum ensures students excel academically and are prepared for higher education."
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: "Expert Faculty",
      description: "Learn from highly qualified educators who are passionate about nurturing and developing young minds."
    },
    {
      id: 3,
      icon: <FaBasketballBall />,
      title: "Holistic Development",
      description: "We focus on sports, arts, and extracurricular activities to build well-rounded individuals."
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Global Perspective",
      description: "Our environment fosters an understanding of global issues, preparing students for the modern world."
    }
  ];

  return (
    <div className="home-container fade-in">
      <Hero />
      
      <section className="section bg-light" id="highlights">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Navjivan?</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              We provide a supportive, inclusive, and rigorous educational experience that sets our students up for success.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container cta-section glass">
          <h2>Ready to Begin the Journey?</h2>
          <p>Join the Navjivan family and give your child the gift of a superior education.</p>
          <Link to="/admissions" className="btn btn-primary mt-4">Learn About Admissions</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
