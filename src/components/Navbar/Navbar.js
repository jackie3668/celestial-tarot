import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({handleMenuToggle, isMobileMenuOpen}) => {
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


      <nav className={`desktop-menu mobile-menu ${isMobileMenuOpen ? 'active' : 'inactive'}`}>
        <ul className={`desktop-menu mobile-menu ${isMobileMenuOpen ? 'active' : 'inactive'}`}>
          <Link to="/" className='link' onClick={handleMenuToggle}><li className='text'>Home</li></Link>
          <Link to="/reading" className='link' onClick={handleMenuToggle}><li className='text' id='new-reading'>Get A Reading</li></Link>
          <Link to="/" className='link' onClick={handleMenuToggle}><li className='text'>About Us</li></Link>
          <Link to="/" className='link' onClick={handleMenuToggle}><li className='text'>Contact</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
