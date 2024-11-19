import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__icon-container">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-section__icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-section__icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="footer-section__icon"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-section__text">Copyright © Abhishek Biradar 2024</p>
    </footer>
  );
};

export default Footer;
