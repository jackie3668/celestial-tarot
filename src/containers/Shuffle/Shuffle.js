import React, { useEffect, useState } from 'react';
import './Shuffle.css';

const Shuffle = ({ userInput, onShuffleClick, cardsNum, setCardsNum, indices, setIndices }) => {
  useEffect(() => {
    console.log('User Input:', userInput);
  }, [userInput]);

const [buttonVisibility, setButtonVisibility] = useState(false);

const handleCardClick = (e) => {
  const card = e.target;
  const selectedCards = document.querySelectorAll('.selected');

  if (selectedCards.length < cardsNum) {
    card.classList.add('fadeOutDown');

    setTimeout(() => {
      card.classList.remove('fadeOutDown');
      card.classList.add('selected');
      card.classList.remove('shuffle-card');

      const selectedContainer = document.querySelector('.selected-container');

      const divToAppendToFront = selectedContainer.querySelector(
        `.card:nth-child(${selectedCards.length+ 1}) .card-front`
      );

      divToAppendTo.appendChild(card);

      const randomNumber = Math.floor(Math.random() * 78) + 1;
      if (!indices.includes(randomNumber)) {
          setIndices((prevIndices) => [...prevIndices, randomNumber]);
      }

      
      const divToAppendTo = selectedContainer.querySelector(
        `.card:nth-child(${selectedCards.length+ 1}) .card-front`
      );
      

      setTimeout(() => {
        const parentCard = card.closest('.card');
        parentCard.classList.add('flipped');
      }, 500);
    }, 500);

    if (selectedCards.length === (cardsNum - 1)) {
      setButtonVisibility(true);
      const shuffleCards = document.querySelectorAll('.shuffle-card');
      shuffleCards.forEach((shuffleCard) => {
        shuffleCard.style.cursor = 'not-allowed';
        shuffleCard.classList.remove('hover-effect-class');
      });
    }
  }
};

const divWidth = (cardsNum * 112) + (cardsNum - 1) * 15

  return (
    <div className='shuffle-container'>
      <h1 className='header-1'>Choose Three Cards</h1>
      <div className="shuffle-deck-container">
        {Array.from({ length: 30 }).map((_, index) => (
          <img
            key={index}
            className='shuffle-card hover-effect-class'
            onClick={handleCardClick}
            src={require('../../assets/design-1/0.png')}
            alt="tarot image"
          />
        ))}
      </div>

      <p>{indices}</p>
      <div className="selected-container" style={{ width: `${divWidth}px` }}>
        <div className="card">
          <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back">
              <img
              src={require('../../assets/design-1/1.png')}
              alt="tarot image"
              />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back">
              <img
              src={require('../../assets/design-1/1.png')}
              alt="tarot image"
              />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back">
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
