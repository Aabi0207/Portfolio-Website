import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectSection.css';

const ProjectsSection = ({ id }) => {
  const [topProjects, setTopProjects] = useState({
    AI: [],
    Fullstack: [],
    DataScience: [],
  });

  useEffect(() => {
    axios
      .get('https://iamvengeance.pythonanywhere.com/api/top-projects/')
      .then((response) => {
        // Map API keys to desired keys
        const mappedProjects = {
          AI: response.data["AI(ML, DL, NLP)"] || [],
          Fullstack: response.data["Fullstack"] || [],
          DataScience: response.data["Data Analysis"] || [],
        };
        setTopProjects(mappedProjects);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="projects-section" id={id}>
      <h2 className="heading-1">My Projects</h2>
      <div className="projects-container">
        {Object.entries(topProjects).map(([domain, projects]) => (
          <div key={domain} className="projects-column">
            <h3 className="heading-2">{domain}</h3>
            <div className="project-cards">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${project.image || 'default_image_path.jpg'})`,
                    }}
                  >
                    <div className="project-overlay">
                      <h4 className="heading-tit">{project.title}</h4>
                      <a
                        href={project.project_url || '#'}
                        className="visit-button"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
