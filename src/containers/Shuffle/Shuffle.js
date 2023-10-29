import React, { useEffect, useState } from 'react';
import './Shuffle.css';

const Shuffle = ({ userInput, onShuffleClick }) => {
  useEffect(() => {
    console.log('User Input:', userInput);
  }, [userInput]);

const maxCards = 3;
const [buttonVisibility, setButtonVisibility] = useState(false);

const handleCardClick = (e) => {
  const card = e.target;
  const selectedCards = document.querySelectorAll('.selected');
  
  if (selectedCards.length < maxCards) {
    card.classList.add('fadeOutDown');

    setTimeout(() => {
      card.classList.remove('fadeOutDown');
      card.classList.add('selected');
      card.classList.remove('shuffle-card')

      const selectedContainer = document.querySelector('.selected-container');
      
      const index = selectedCards.length;
      
      const divToAppendTo = selectedContainer.querySelector(
        `.card:nth-child(${index + 1}) .card-front`
      );
      divToAppendTo.appendChild(card);
    }, 700);
    
    if (selectedCards.length === (maxCards - 1)) {
      setButtonVisibility(true);
    }
  }
};

const divWidth = (maxCards * 112) + (maxCards - 1) * 15

const handleCardFlip = (e) => {
  console.log('Clicked Element:', e.currentTarget); 
  e.currentTarget.classList.add('flipped')
}

  return (
    <div className='shuffle-container'>
      <h1 className='header-1'>Choose Three Cards</h1>
      <div className="shuffle-deck-container">
        {Array.from({ length: 30 }).map((_, index) => (
          <img
            key={index}
            className='shuffle-card'
            onClick={handleCardClick}
            src={require('../../assets/design-1/0.png')}
            alt="tarot image"
          />
        ))}
      </div>

      <div className="selected-container" style={{ width: `${divWidth}px` }}>
        <div className="card" onClick={handleCardFlip}>
          <div className="card-inner">
            <div className="card-front">Front of the card</div>
            <div className="card-back">Back of the card
              <img
              src={require('../../assets/design-1/1.png')}
              alt="tarot image"
              />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <div className="card-front">Front of the card</div>
            <div className="card-back">Back of the card
              <img
              src={require('../../assets/design-1/1.png')}
              alt="tarot image"
              />
          </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <div className="card-front">Front of the card</div>
            <div className="card-back">Back of the card
              <img
              src={require('../../assets/design-1/1.png')}
              alt="tarot image"
              />
            </div>
          </div>
        </div>
        
      </div>

      <button onClick={onShuffleClick} className={buttonVisibility ? 'visible' : 'invisible'}>Get My Results</button>
    </div>
  );
};

export default Shuffle;
