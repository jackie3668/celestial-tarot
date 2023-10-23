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
      <div className="cloud1">
          <img className="cloud1-img" src={require('../../assets/cloud1.png')} alt="cloud" />
        </div>
        <div className="cloud2">
          <img className="cloud2-img" src={require('../../assets/cloud2.png')} alt="cloud" />
        </div>
        <div className="cloud3">
          <img className="cloud3-img" src={require('../../assets/cloud3.png')} alt="cloud" />
        </div>
        <div className="cloud4">
          <img className="cloud4-img" src={require('../../assets/cloud4.png')} alt="cloud" />
        </div>
        <div className="cloud5">
          <img className="cloud5-img" src={require('../../assets/cloud5.png')} alt="cloud" />
        </div>
        <div className="cloud6">
          <img className="cloud6-img" src={require('../../assets/cloud6.png')} alt="cloud" />
        </div>
        <div className="leftbirds">
          <img className="leftbirds-img" src={require('../../assets/leftbirds.png')} alt="birds" />
        </div>
        <div className="rightbirds">
          <img className="rightbirds-img" src={require('../../assets/rightbirds.png')} alt="birds" />
        </div>
      </div>
    </div>
  );
}

export default Question;
