import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="mobile-header">
        <a href="/celestial-tarot" className="link">
          <div className="logo header-1">Celestial</div>
        </a>
        <div className={`hamburger-menu ${isMobileMenuOpen ? 'opened' : 'closed'}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>


      <nav className={`mobile-menu ${isMobileMenuOpen ? 'active' : 'hidden'}`}>
        <ul className="nav-links">
          <Link to="/" className='link'><li className='text'>Home</li></Link>
          <Link to="/reading" className='link'><li className='text'>Get A Reading</li></Link>
          <Link to="/" className='link'><li className='text'>About Us</li></Link>
          <Link to="/" className='link'><li className='text'>Contact</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
