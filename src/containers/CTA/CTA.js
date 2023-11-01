import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div>
      <div className="cta-container">
        <div>
          <img className="cta-image" src={require('../../assets/home/cta.png')} alt="cta image" />
        </div>
        <div className="cta-text">
          <h2 className="header-2">
            Tarot Reimagined:&nbsp;
            <br /> 
            A modern approach</h2>
          <p className="cta">Embrace a modern approach to Tarot. We offer on-the-go readings for instant guidance. Leave behind the cards and find clarity anytime, anywhere.</p>
          <button className='cta-button'><Link to="/reading" className='link'>GET A READING</Link></button>
        </div>
        
      </div>
    </div>
  )
}

export default CTA