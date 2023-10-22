import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div>
      <div className="cta-container">
        <div className="cta-text">
          <h2 className="header-2-bold">
            Tarot Reimagined:&nbsp;
            <br /> 
            A modern approach</h2>
          <p className="cta">Embrace a modern approach to Tarot. We offer on-the-go readings for instant guidance. Leave behind the cards and find clarity anytime, anywhere.</p>
          <button><Link to="/question" className='link button'>GET A READING</Link></button>
        </div>
        <div className="cta-image">
          <img src={require('../../assets/cta-image.png')} alt="cta image" />
        </div>
      </div>
    </div>
  )
}

export default CTA