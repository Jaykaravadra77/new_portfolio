import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
        </div>
        <div className="footer-copyright">
          <p>© {currentYear} Node.js Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 