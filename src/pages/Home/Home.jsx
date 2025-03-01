import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Jay Karavadra</span>
          <span className="title">Node.js Developer</span>
        </h1>
        <p className="hero-description">
          A passionate Node.js backend developer with 3 years of experience specializing in AI-enhanced development. I leverage generative AI tools like ChatGPT and Cursor Editor to build efficient, scalable web applications and RESTful APIs with improved productivity and innovation.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>

      <div className="skills-overview">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-container">
          <div className="skill-badge">Node.js</div>
          <div className="skill-badge">Express</div>
          <div className="skill-badge">Fastify</div>
          <div className="skill-badge">MongoDB</div>
          <div className="skill-badge">MySQL</div>
          <div className="skill-badge">JavaScript</div>
          <div className="skill-badge">TypeScript</div>
          <div className="skill-badge">Microservices</div>
          <div className="skill-badge">GraphQL</div>
          <div className="skill-badge">Generative AI</div>
          <div className="skill-badge">Docker</div>
          <div className="skill-badge">AWS</div>
        </div>
      </div>
    </section>
  );
};

export default Home; 