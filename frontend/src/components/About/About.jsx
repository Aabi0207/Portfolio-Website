// src/components/About.jsx
import React from 'react';
import './About.css';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const About = ({id}) => {
  return (
    <section className="about-section" id={id}>
      <BlurText
        text="Hii 👋, My name is Abhishek Biradar"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="about-greeting"
      />
      <div className="about-stack">
      I am a Full Stack Developer and AI Engineer
      </div>
      {/* <div className="image-background-container"> */}
      <div className="about-image-container">
        <img src="projects_images/profilePhoto.jpeg" alt="Profile" className="about-image" />
        {/* <img src="/imageBackg.png" alt="" className="backg-profile" /> */}
      </div>
      {/* </div> */}

      <div className="about-title">About Me</div>
      <p className="about-description">
      I’m a developer who enjoys working on projects in AI, Fullstack Development, and Data Science. I specialize in Machine Learning, Deep Learning, and Natural Language Processing, using these skills to solve real-world problems and create functional, innovative solutions. Writing clean, efficient code and delivering easy-to-use designs is what I focus on most.
      </p>
      <p className="about-description">I’m always looking for ways to improve, learn new skills, and take on challenges that make a difference in the tech world.</p>
    </section>
  );
};

export default About;
