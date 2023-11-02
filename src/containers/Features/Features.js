import React from 'react';
import './Features.css';
import icon1 from '../../assets/home/icon1.png';
import icon2 from '../../assets/home/icon2.png';
import icon3 from '../../assets/home/icon3.png';

const Features = () => {
  return (
    <div className='features-container'>
      <h2  className='header-2'>Why Celestial?</h2>
      <div className='divider'> </div>
      <div className="features">
        <div className="feature-container">
          <img className='icon-img' src={icon3} alt="icon" />
          <h3 className='header-3'>Tarot On-the-Go</h3>
          <p className='text'>Access tarot wisdom, anytime, anywhere</p>
        </div>

        <div className="feature-container">
          <img className='icon-img' src={icon2} alt="icon" />
          <h3 className='header-3'>Diverse Spreads</h3>
          <p className='text'>Dive into a world of diverse tarot spread options</p>
        </div>

        <div className="feature-container">
          <img className='icon-img' src={icon1} alt="icon" />
          <h3 className='header-3'>Tailored Reading</h3>
          <p className='text'>Unlock insights  that are unique to your journey </p>
        </div>
      </div>

    </div>
  )
}

export default Features