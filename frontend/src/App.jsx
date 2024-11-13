// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import SkillsTable from "./components/Skills/SkillTable";
import ProjectsSection from "./components/Projects/ProjectSection";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar id="nav" />
      <div id="container">
        <About id="about" />
        <SkillsTable id="skill-table" />
      </div>

      <ProjectsSection id="project-section" />
      {/* Other sections can go here */}
    </div>
  );
};

export default App;
