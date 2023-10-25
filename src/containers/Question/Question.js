import React from 'react';
import './Question.css';

function Question({userInput, setUserInput, handleQuestionClick, handleQuestionKeyDown}) {
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="question-container">
      <div className="question-input-container">
        <div className="question-input-back">
          <div className="question-input-front">
            <input className='header-3' type="text" value={userInput} onChange={handleChange} onKeyDown={handleQuestionKeyDown} placeholder='Ask a question'/>
          </div>
        </div>
          <button className='question-button' onClick={handleQuestionClick} >Ready</button>
      </div>
    </div>
  );
}

export default Question;
