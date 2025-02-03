import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import SkillsTable from "./components/Skills/SkillTable";
import ProjectsSection from "./components/Projects/ProjectSection";
import AllProjects from "./components/AllProjects/AllProjects";
import ContactPage from "./components/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
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

      {/* Wrapper for smooth transitions */}
      <div id="project-container">
        <img src="/projects_images/blueBackg.png" alt="" />
        <CSSTransition
          in={showAllProjects === 0}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <ProjectsSection id="project-section" />
        </CSSTransition>
        <CSSTransition
          in={showAllProjects === 1}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <AllProjects id="all-projects" />
        </CSSTransition>
      </div>

      {/* Button for toggling the flag */}
      <a href="#project-container" className="butt">
        <div className="button-container">
          <button className="toggle-button" onClick={toggleProjects}>
            {showAllProjects === 0 ? "Show More" : "Show Less"}
          </button>
        </div>
      </a>
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
