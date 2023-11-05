import React, { useEffect, useState } from 'react';
import './Shuffle.css';
import tarotIndex from '../../data/tarot-index.json';

const Shuffle = ({ userInput, onShuffleClick, cardsNum, setCardsNum, indices, setIndices, cards, setCards, reversed, setReversed }) => {
  
const [buttonVisibility, setButtonVisibility] = useState(false);

const handleCardClick = (e) => {

  const card = e.target;

  const selectedCards = document.querySelectorAll('.selected');
  
  // if not enough cards chosen, proceed
  if (selectedCards.length < cardsNum) {
    card.classList.add('fadeOutDown');
    
    // choose random numbers, add random numbers to indices, and add tarot names to cards, add reversals to reversed
    const randomNumber = Math.floor(Math.random() * 78) + 1;
    const reversal = Math.floor(Math.random() * 2)

    if (!indices.includes(randomNumber)) {
      setIndices((prevIndices) => [...prevIndices, randomNumber]);
      setCards((prevCards) => [...prevCards, tarotIndex[randomNumber]])
      setReversed((prevReversed) => [...prevReversed, reversal])
    }

    // card fade down animation & card flip animation
    setTimeout(() => {
      card.classList.remove('fadeOutDown');
      card.classList.add('selected');
      card.classList.remove('shuffle-card');
      const shuffleCards = document.querySelectorAll('.shuffle-card');
      shuffleCards.forEach((shuffleCard) => {
        shuffleCard.style.cursor = 'not-allowed';
      });

      const selectedContainer = document.querySelector('.selected-container');

      const divToAppendToFront = selectedContainer.querySelector(
        `.card:nth-child(${selectedCards.length+ 1}) .card-front`
      );

      divToAppendToFront.appendChild(card);
  
      setTimeout(() => {
        const parentCard = card.closest('.card');
        parentCard.classList.add('flipped');
        console.log(selectedCards.length != (cardsNum - 1))
        if (selectedCards.length != (cardsNum - 1)) {
          shuffleCards.forEach((shuffleCard) => {
            shuffleCard.style.cursor = 'pointer';
          });
        }
      }, 300);

    }, 500);

    // if max cards chosen, display 'get results' button, remove pointer cursor and choose card effect
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

// div width styling corresponding to card numbers
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

      <div className="selected-container" style={{ width: `${divWidth}px` }}>
        {Array.from({ length: cardsNum }).map((_, index) => (
        <div className="card" key={index}>
          <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back">
              <img
              src={require(`../../assets/design-1/${indices[index]}.png`)} 
              className={reversed[index] === 1 ? 'reversed' : ''}
              alt="tarot image"
              />
            </div>
          </div>
        </div>
        ))}    
      </div>

      <button onClick={onShuffleClick} className={buttonVisibility ? 'visible' : 'invisible'}>Get My Results</button>
    </div>
  );
};

export default Shuffle;
