import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2022 Company, Inc</p>

      <a href="/" className="footer-logo">
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
      </a>

      <ul className="footer-nav">
        <li className="footer-nav-item"><a href="#" className="footer-nav-link">Home</a></li>
        <li className="footer-nav-item"><a href="#" className="footer-nav-link">Features</a></li>
        <li className="footer-nav-item"><a href="#" className="footer-nav-link">Pricing</a></li>
        <li className="footer-nav-item"><a href="#" className="footer-nav-link">Analytics</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
