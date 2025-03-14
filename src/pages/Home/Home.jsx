import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const handleContactClick = () => {
    // Scroll to contact section if on same page
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // If using email instead of a contact page
    // window.location.href = 'mailto:your.email@example.com';
  };

  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Jay Karavadra</span>
          <span className="title">Backend Engineer</span>
        </h1>
        <p className="hero-description">
          A passionate Node.js backend developer with 3 years of experience specializing in AI-enhanced development. I leverage generative AI tools like ChatGPT and Cursor Editor to build efficient, scalable web applications with improved productivity and innovation.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <button onClick={handleContactClick} className="btn btn-secondary">Contact Me</button>
          <a href="https://docs.google.com/document/d/1ZMPUQhft-kHh7FTBiJmc-mHPImjxlJiE3fKUg7IN-Lo/edit?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
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

      {/* You can add a contact section here */}
      <div id="contact-section" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="contact-options">
            <a href="tel:+919876543210" className="contact-option">
              <i className="contact-icon">📱</i>
              <span>+91 7046410074</span>
            </a>
            <a href="mailto:jaykaravadra77@gmail.com" className="contact-option">              <i className="contact-icon">✉️</i>
              <span>jaykaravadra77@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/jaykaravadra" target="_blank" rel="noopener noreferrer" className="contact-option">
              <i className="contact-icon">💼</i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Jaykaravadra77" target="_blank" rel="noopener noreferrer" className="contact-option">
              <i className="contact-icon">💻</i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 