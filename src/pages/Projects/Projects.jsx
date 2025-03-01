import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <p className="section-description">
        Here are some of the projects I've worked on as a Node.js developer.
        Each project demonstrates different aspects of my technical skills and problem-solving abilities.
      </p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 