import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const currentYear = new Date().getFullYear(); // Get the current year

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="divider">
        <div className="footer-links">
          <ul className="footer-nav">
            <li className="footer-item text">
              <Link to="/" className="link">
                About Us
              </Link>
            </li>
            <span>|</span>
            <li className="footer-item text">
              <Link to="/" className="link">
                Contact
              </Link>
            </li>
            <span>|</span>
            <li className="footer-item text">
              <Link to="/terms" className="link">
                Terms of Use
              </Link>
            </li>
            <span>|</span>
            <li className="footer-item text">
              <Link to="/privacy" className="link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="copyright-container">
        <div className="footer-copyright text">
            Copyright © {currentYear} All Rights Reserved
        </div>
      </div>


    </footer>
  );
};

export default Footer;
