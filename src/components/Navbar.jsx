import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>NAVJIVAN</h2>
          <span className="logo-subtitle">English Medium School</span>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admissions" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
              Admissions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
