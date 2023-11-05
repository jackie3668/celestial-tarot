import React, { useState } from 'react';
import './Educational.css';

const Educational = () => {


  const handleClick = (e) => {
    const icon = e.target;
    icon.textContent = icon.textContent === '+' ? '-' : '+';
    const paragraph = icon.parentNode.nextElementSibling;
    paragraph.classList.toggle('invisible');
    }
  


  return (
    <div className="educational-container">
      <h1 className='header-1'>About Tarot</h1>
      <div className="educational-collapsible-section">

        <p className='text'>Discover the history, symbolism, and practice of tarot reading, unlocking the secrets of divination and self-discovery in this section.</p>
        
        <div className="divider"></div>
        <section>
          <div className="header-row">
            <div className="header-container">
              <h2 className='header-3'>01</h2>
              <h2 className='header-3'>Tarot Origin</h2>
            </div>
            <h3 className="collapsible-icon header-2" onClick={handleClick}>+</h3>
          </div>
          <p className='invisible text'>Tarot cards, with uncertain origins dating back to the 15th century, were initially a card game. Today, they serve as a powerful tool for divination, providing insights into various aspects of life. </p>
        </section>

        <div className="divider"></div>
        <section>
          <div className="header-row">
            <div className="header-container">
                <h2 className='header-3'>02</h2>
                <h2 className='header-3'>Tarot Deck</h2>
              </div>
            <h3 className="collapsible-icon header-2" onClick={handleClick}>+</h3>
          </div>
          <p className='invisible text'>A standard tarot deck consists of 78 cards, divided into two main categories: the Major Arcana and the Minor Arcana. The Major Arcana comprises 22 cards, each representing significant life themes and lessons. The Minor Arcana contains 56 cards,divided into four suits: Cups (emotions), Pentacles (material aspects), Swords (challenges), and Wands (action and creativity).</p>
        </section>

        <div className="divider"></div>
        <section>
          <div className="header-row">
            <div className="header-container">
                <h2 className='header-3'>03</h2>
                <h2 className='header-3'>How to use our app</h2>
              </div>
            <h3 className="collapsible-icon header-2" onClick={handleClick}>+</h3>
          </div>
          <p className="invisible text">
            <p class="tarot-step">
              <strong>Enter Your Question:</strong> Type a clear and specific question into the text field.
            </p>
            <p class="tarot-step">
              <strong>Choose Your Card:</strong> Click on a tarot card from the deck.
            </p>
            <p class="tarot-step">
              <strong>Card Interpretation:</strong> Instantly receive an interpretation of your selected card, including its symbolism and potential meanings.
            </p>
          </p>
        </section>

        <div className="divider"></div>
        <section>
          <div className="header-row">
            <div className="header-container">
                <h2 className='header-3'>04</h2>
                <h2 className='header-3'>What to use tarot for</h2>
              </div>
            <h3 className="collapsible-icon header-2" onClick={handleClick}>+</h3>
          </div>
          <p className='invisible text'>Use the tarot card interpretation to empower self-reflection. Contemplate the card's symbolism, connecting it with your question. Gain insights, make informed choices, and navigate life's journey with clarity and confidence.</p>
        </section>

        <div className="divider"></div>
      </div>
     
    </div>
  );
};

export default Educational;
