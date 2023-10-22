import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo header-1">LOGO</div>
      <nav>
        <ul className="nav-links">
          <Link to="/" className='link'><li className='text'>Home</li></Link>
          <Link to="/" className='link'><li className='text'>Learn Tarot</li></Link>
          <Link to="/question" className='link'><li className='text'>Get A Reading</li></Link>
          <li className='text'>About Us</li>
          <li className='text'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar