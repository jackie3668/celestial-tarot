import React, { useEffect } from 'react';
import './Shuffle.css';


const Shuffle = ({ userInput, onShuffleClick }) => {
  useEffect(() => {
    console.log('SHUser Input:', userInput); 
  }, [userInput]);

  return (
    <div className='shuffle-container'>
      <h1>Choose Three Cards</h1>
      <div className="shuffle-deck-container">
        {Array.from({length: 40}).map((_, index) => (
          <img key={index} className='shuffle-card' src={require('../../assets/design-1/0.png')} alt="tarot image" />
        ))}
      </div>
      <button onClick={onShuffleClick}>Get My Results</button>
    </div>
  )
}

export default Shuffle;
