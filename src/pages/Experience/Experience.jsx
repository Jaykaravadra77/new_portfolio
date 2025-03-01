import React, { useState } from 'react';
import './Experience.css';
import experiences from '../../data/experiences';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="experience-section">
      <h1 className="section-title">Work Experience</h1>
      
      <div className="experience-container">
        <div className="experience-tabs">
          {experiences.map((exp, index) => (
            <button 
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        <div className="experience-content">
          {experiences[activeTab] && (
            <div className="experience-details">
              <h3 className="job-title">
                {experiences[activeTab].title} <span className="company-name">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="job-duration">{experiences[activeTab].duration}</p>
              
              <ul className="job-responsibilities">
                {experiences[activeTab].responsibilities.map((responsibility, index) => (
                  <li key={index} className="responsibility-item">
                    {responsibility}
                  </li>
                ))}
              </ul>
              
              {/* Technologies section commented out
              <div className="tech-used">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              */}
              
              {/* Achievements section commented out
              {experiences[activeTab].achievements && (
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul className="achievements-list">
                    {experiences[activeTab].achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience; 