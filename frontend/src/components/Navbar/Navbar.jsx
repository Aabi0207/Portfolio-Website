// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left" ref={dropdownRef}>
        <div className="dropdown-button" onClick={toggleDropdown}>
          Menu
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <a href="#home" className="navbar-link" onClick={toggleDropdown}>
              Home
            </a>
            <a href="#skills" className="navbar-link" onClick={toggleDropdown}>
              Skills
            </a>
            <a href="#projects" className="navbar-link" onClick={toggleDropdown}>
              Projects
            </a>
            <a href="#socials" className="navbar-link" onClick={toggleDropdown}>
              Socials
            </a>
          </div>
        )}
        {/* Desktop links */}
        <div className="desktop-links">
          <a href="#home" className="navbar-link">
            Home
          </a>
          <a href="#skills" className="navbar-link">
            Skills
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#socials" className="navbar-link">
            Socials
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#connect" className="navbar-connect">
          <span className="connect-border">Connect</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
