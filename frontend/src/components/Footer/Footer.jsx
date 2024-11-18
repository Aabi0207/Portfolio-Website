import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px 0",
        textAlign: "center",
        backgroundColor: "#fff", // White background
        color: "#333", // Dark text
      }}
    >
      {/* Social Icons */}
      <div style={iconContainerStyle}>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:your-email@example.com"
          style={iconStyle}
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Copyright Text */}
      <p style={copyrightStyle}>
        Copyright © Abhishek Biradar 2024
      </p>
    </footer>
  );
};

// Styles
const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px", // Space between icons
  marginBottom: "10px",
};

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%", // Circle shape
  color: "#333",
  transition: "all 0.3s ease",
  textDecoration: "none",
};

iconStyle["&:hover"] = {
  backgroundColor: "#333", // Fill the circle on hover
  color: "#fff", // Change icon color to white
};

const copyrightStyle = {
  fontSize: "12px", // Smaller text
  fontWeight: "400", // Font weight 400
  marginTop: "10px",
  color: "#555", // Softer text color
};

export default Footer;
