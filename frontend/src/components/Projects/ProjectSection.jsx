import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProjectSection.css"

const ProjectsSection = () => {
  const [topProjects, setTopProjects] = useState({});
  const [allProjects, setAllProjects] = useState({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch top projects for each domain
    axios.get('/api/top-projects/')
      .then(response => setTopProjects(response.data))
      .catch(error => console.error(error));

    // Fetch all projects (can be filtered by domain later)
    axios.get('/api/all-projects/')
      .then(response => setAllProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleShowMore = (domain) => {
    setShowAll(domain);
  };

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {Object.keys(topProjects).map(domain => (
          <div key={domain} className="projects-column">
            <h3>{domain}</h3>
            <div className="project-cards">
              {topProjects[domain].map(project => (
                <div key={project.id} className="project-card">
                  <img src={project.image} alt={project.title} />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.project_url}>See More</a>
                </div>
              ))}
            </div>
            <button onClick={() => handleShowMore(domain)}>See More</button>

            {showAll === domain && (
              <div className="all-projects">
                {allProjects[domain]?.map(project => (
                  <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <a href={project.project_url}>See More</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
