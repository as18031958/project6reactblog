
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Stylehome.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="head">
        <h1>The Siren</h1>
        <button className="hamburger" onClick={toggleMenu}>
          {/* Hamburger icon (replace with your desired icon) */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/"> |Home| </NavLink></li>
          <li><NavLink to="/Bollywood"> |Bollywood| </NavLink></li>
          <li><NavLink to="/Hollywood"> |Hollywood| </NavLink></li>
          <li><NavLink to="/Food"> |Food| </NavLink></li>
          <li><NavLink to="/Fitness"> |Fitness| </NavLink></li>
          <li><NavLink to="/Technology"> |Technology| </NavLink></li>
        </ul>
      </nav>
    </>
  );
};
