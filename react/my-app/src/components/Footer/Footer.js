import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2022 Company, Inc</p>



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
