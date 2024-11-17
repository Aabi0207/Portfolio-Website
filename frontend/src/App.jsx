// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import SkillsTable from "./components/Skills/SkillTable";
import ProjectsSection from "./components/Projects/ProjectSection";
import AllProjects from "./components/AllProjects/AllProjects";
import "./App.css";

const App = () => {
  const [showAllProjects, setShowAllProjects] = useState(0);

  // Toggle the flag
  const toggleProjects = () => {
    setShowAllProjects((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div>
      <Navbar id="nav" />
      <div id="container">
        <About id="about" />
        <SkillsTable id="skill-table" />
      </div>

      {/* Render either ProjectsSection or AllProjects based on the flag */}
      {showAllProjects === 0 ? (
        <ProjectsSection id="project-section" />
      ) : (
        <AllProjects id="all-projects" />
      )}

      {/* Button for toggling the flag */}
      <div className="button-container">
        <button className="toggle-button" onClick={toggleProjects}>
          {showAllProjects === 0 ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default App;
