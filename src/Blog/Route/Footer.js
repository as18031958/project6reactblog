import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Bollywood">Bollywood</NavLink></li>
        <li><NavLink to="/Hollywood">Hollywood</NavLink></li>
        <li><NavLink to="/Food">Food</NavLink></li>
        <li><NavLink to="/Fitness">Fitness</NavLink></li>
        <li><NavLink to="/Technology">Technology</NavLink></li>
      </ul>
      <p>Copyright &copy; 2023 The Siren</p>
    </footer>
  );
};

