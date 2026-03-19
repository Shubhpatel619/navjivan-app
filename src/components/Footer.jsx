import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">NAVJIVAN</h2>
          <p className="footer-tagline">Empowering Minds, Shaping Futures.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> <span>123 Education Lane, Learning City, 40001</span></li>
            <li><FaPhone /> <span>+91 98765 43210</span></li>
            <li><FaEnvelope /> <span>info@navjivanschool.edu</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Navjivan English Medium School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
