// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-greeting">Hii 👋, My name is Abhishek Biradar</div>
      <div className="about-stack">
      I am an AI Engineer and a Full Stack Developer
      </div>
      <div className="about-image-container">
        <img src="path/to/your-logo-or-profile.jpg" alt="Profile" className="about-image" />
      </div>
      <div className="about-title">About Me</div>
      <p className="about-description">
      Hi, I'm Abhishek Biradar, a Bachelor of Engineering student in Information Technology with a passion for building impactful tech solutions.
      </p>
      <p className="about-description">My journey in coding began three years ago with foundational skills in HTML, CSS, and JavaScript. Driven by a keen interest in data science and machine learning, I soon chose Python as my primary language. Along the way, I’ve gained hands-on experience with powerful backend frameworks like Flask and Django, enabling me to develop dynamic, data-driven applications.</p>
    </section>
  );
};

export default About;
