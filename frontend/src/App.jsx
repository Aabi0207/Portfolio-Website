import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import SkillsTable from "./components/Skills/SkillTable";
import ProjectsSection from "./components/Projects/ProjectSection";
import AllProjects from "./components/AllProjects/AllProjects";
import ContactPage from "./components/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import useIntersectionObserver from "./UseIntersectionObserver";
import "./App.css";

const App = () => {
  const [showAllProjects, setShowAllProjects] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [topProjects, setTopProjects] = useState({
    AI: [],
    Fullstack: [],
    DataScience: [],
  });

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    axios.get("https://iamvengeance.pythonanywhere.com/api/top-projects/")
      .then((response) => {
        const mappedProjects = {
          AI: response.data["AI(ML, DL, NLP)"] || [],
          Fullstack: response.data["Fullstack"] || [],
          DataScience: response.data["Data Analysis"] || [],
        };
        setTopProjects(mappedProjects);
        setIsLoading(false);
  
        // Clear native loader
        const loader = document.getElementById("initial-loader");
        if (loader) {
          setTimeout(() => {
            loader.classList.add("fade-out");
            // loader.remove();
          }, 300);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  


  const isSkillsVisible = useIntersectionObserver(skillsRef, { threshold: 0.5 });
  const isProjectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });

  const toggleProjects = () => {
    setShowAllProjects((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div>
      <Navbar id="nav" />
      <div id="container">
        <About id="about" />
        <div
          ref={skillsRef}
          className={`section ${isSkillsVisible ? "visible" : ""}`}
        >
          <SkillsTable id="skill-table" />
        </div>
      </div>

      <div
        id="project-container"
        ref={projectsRef}
        className={`section ${isProjectsVisible ? "visible" : ""}`}
      >
        <img src="/projects_images/blueBackg.png" alt="" />

        <CSSTransition
          in={showAllProjects === 0}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <ProjectsSection id="project-section" topProjects={topProjects} />
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
