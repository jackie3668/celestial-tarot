import React from 'react';
import { Link } from 'react-router-dom';

function Question() {
  return (
    <div>
      <div className="question-container">
        <div className="question-input-container">
          <div className="question-input-back">
            <div className="question-input-front">
              <input type="text" placeholder='Ask a question'/>
            </div>
          </div>
        </div>
        <Link to="/shuffle">
        <button className='question-button'>Ready</button>
        </Link>
      </div>
     
    </div>
  );
}

export default Question;
