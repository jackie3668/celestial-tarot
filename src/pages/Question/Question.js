import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

function Question() {
  return (
    <div className="question-container">
      <div className="question-input-container">
        <div className="question-input-back">
          <div className="question-input-front">
            <input className='header-3' type="text" placeholder='Ask a question'/>
          </div>
        </div>
        <Link to="/shuffle">
          <button className='question-button'>Ready</button>
        </Link>
      </div>


      <div className="cloud-container">
        <div className="cloud1 moving-image-container">
          <img className="cloud1-img still-image" src={require('../../assets/cloud1.png')} alt="cloud 1" />
        </div>
        <div className="cloud2">
          {/* <img className="cloud2-img still-image" src={require('../../assets/cloud2.png')} alt="cloud 2" /> */}
        </div>
        <div className="cloud3">
          <img className="cloud3-img still-image" src={require('../../assets/cloud3.png')} alt="cloud 3" />
        </div>
      </div>
    </div>
  );
}

export default Question;
