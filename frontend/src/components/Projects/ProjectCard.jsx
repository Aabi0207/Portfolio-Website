// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, projectUrl }) => {
  return (
    <div className="project-card">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="hover-overlay">
          <h4>{title}</h4>
          <button>Visit</button>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
