import React, { useState } from 'react';
import projects from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <p className="section-description">
        Here are projects I've worked on as a Node.js developer.
        Click on a project to learn more about it.
      </p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-box"
            onClick={() => openProjectModal(project)}
          >
            <div className="project-year">{project.year}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-company">{project.company}</p>
            <div className="project-view">View Details</div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProjectModal}>×</button>
            
            <h2 className="modal-title">
              {selectedProject.title}
              {selectedProject.liveLink && (
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  ({new URL(selectedProject.liveLink).hostname})
                </a>
              )}
            </h2>
            
            <p className="modal-company">
              <span className="company-label">Company:</span> {selectedProject.company}
            </p>
            <p className="modal-year">
              <span className="year-label">Year:</span> {selectedProject.year}
            </p>
            
            <div className="modal-description">
              <h3>Project Description</h3>
              <p>{selectedProject.description}</p>
              
              {selectedProject.details && selectedProject.details.length > 0 && (
                <div className="project-details">
                  <h4>Key Contributions:</h4>
                  <ul className="details-list">
                    {selectedProject.details.map((detail, index) => (
                      <li key={index} className="detail-item">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {selectedProject.technologies && (
              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="modal-links">
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 