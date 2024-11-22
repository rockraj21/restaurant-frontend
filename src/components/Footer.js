import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      {/* Orange Line */}
      <div className="footer-divider"></div>

      {/* Footer Content */}
      <footer className="footer">
        <div className="footer-title">
          <h1>AL ITALIA</h1>
          <p>&copy; {new Date().getFullYear()} AL ITALIA. All rights reserved.</p>
        </div>
        <div className="footer-contact">
          <p>📞 Phone: +91-6366355399</p>
          <p>📧 Email: info@alitalia.com</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
