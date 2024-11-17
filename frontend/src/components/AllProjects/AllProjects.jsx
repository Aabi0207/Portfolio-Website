import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProjects.css";

const AllProjects = ({id}) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // Fetch projects data using Axios
    axios
      .get("http://127.0.0.1:8000/api/all-projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  if (!projects) {
    return <p>Loading projects...</p>;
  }

  return (
    <div className="all-projects" id={id}>
      <h2>My Projects</h2>
      <div className="projects-container">
        {Object.entries(projects).map(([domain, domainProjects]) => (
          <div key={domain} className="project-domain">
            <h3>{domain}</h3>
            <div className="project-list">
              {domainProjects.length > 0 ? (
                domainProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-capsule"
                  >
                    <span className="project-title">{project.title}</span>
                    <span className="arrow">→</span>
                  </a>
                ))
              ) : (
                <p>No projects available in this domain.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
