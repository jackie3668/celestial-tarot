import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleClick = () => {

  }
  return (
    <div className="navbar-container">
      <a href="/celestial-tarot" className="link">
        <div className="logo header-1">Celestial</div>
      </a>

      {/* <div className="menu" onClick={handleClick}>=</div> */}
      <nav className='mobile-invisible'>
        <ul className="nav-links">
          <Link to="/" className='link'><li className='text'>Home</li></Link>
          <Link to="/reading" className='link'><li className='text'>Get A Reading</li></Link>
          <Link to="/" className='link'><li className='text'>About Us</li></Link>
          <Link to="/" className='link'><li className='text'>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar