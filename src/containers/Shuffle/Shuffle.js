import React, { useEffect } from 'react';
import './Shuffle.css';


const Shuffle = ({ userInput }) => {
  useEffect(() => {
    console.log('SHUser Input:', userInput); 
  }, [userInput]);

  return (
    <div className='shuffle-container'>
      <h1>SHUFFLE</h1>
      <div className="deck-container">
        <img src={require('../../assets/design-1/0.png')} alt="cta image" />
      </div>
    </div>
  )
}

export default Shuffle;
