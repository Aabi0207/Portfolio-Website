import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__icon-container">
        <a
          href="https://github.com/Aabi0207"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-section__icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-biradar-915404281"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-section__icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:abhishekbiradar0207@gmail.com"
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
