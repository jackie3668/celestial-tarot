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

      const selectedContainer = document.querySelector('.selected-container');
      
      const index = selectedCards.length;
      
      const divToAppendTo = selectedContainer.children[index];
      divToAppendTo.appendChild(card);

      if (selectedCards.length === maxCards) {
        setButtonVisibility(true);
      }
    }, 700);
  }
};

  const divWidth = (maxCards * 112) + (maxCards - 1) * 15
  
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
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button onClick={onShuffleClick} className={buttonVisibility ? 'visible' : 'invisible'}>Get My Results</button>
    </div>
  );
};

export default Shuffle;
