import React, { useEffect, useState } from 'react';
import './Shuffle.css';

const Shuffle = ({ userInput, onShuffleClick }) => {
  useEffect(() => {
    console.log('User Input:', userInput); 
  }, [userInput]);

const maxCards = 5;

const handleCardClick = (e) => {
 console.log(e.target)
 console.log(document.querySelectorAll('.clicked').length);
 if (document.querySelectorAll('.clicked').length < maxCards) {
  e.target.classList.toggle('clicked');
 }
 else {
  e.target.classList.remove('clicked');
 }
}

  return (
    <div className='shuffle-container'>
      <h1>Choose Three Cards</h1>
      <div className="shuffle-deck-container">
        {Array.from({length: 30}).map((_, index) => (
          <img key={index} className='shuffle-card' onClick={handleCardClick} src={require('../../assets/design-1/0.png')} alt="tarot image" />
        ))}
      </div>
      <button onClick={onShuffleClick}>Get My Results</button>
    </div>
  )
}

export default Shuffle;
