// src/components/Navbar.jsx
import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#connect" className="navbar-link">Connect</a>
      </div>
      <div className="navbar-right">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#skills" className="navbar-link">Skills</a>
        <a href="#projects" className="navbar-link">Projects</a>
        <a href="#socials" className="navbar-link">Socials</a>
      </div>
    </nav>
  );
};

export default Navbar;
