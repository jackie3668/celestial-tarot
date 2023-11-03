import React from 'react';
import './Educational.css';

const Educational = () => {
  return (
    <div className="educational-container">
      <h1 className='header-2'>Learn Tarot</h1>

      <section className="what-is-tarot">
        <h2 className='header-3'>Introduction</h2>
        <p>Explore the mystical world of tarot reading and gain insights into your life's questions.</p>
      </section>

      <section className="tarot-basics">
        <h2 className='header-3'>Tarot Basics</h2>
        <p>Discover the history and origins of tarot cards, and their significance in divination.</p>
        <p>Whether you're a beginner or an experienced reader, our educational resources can help you unlock the secrets of the tarot.</p>
      </section>

      <section className="card-meanings">
        <h2 className='header-3'>Card Meanings</h2>
        <p>Explore the symbolism and interpretations of major and minor arcana cards.</p>
        <p>Each card has a unique meaning and can provide guidance in various aspects of life, from love and career to personal growth.</p>
      </section>

      <section className="how-tarot-works">
        <h2 className='header-3'>How Tarot Works</h2>
        <p>Learn about the principles behind tarot reading, including shuffling, drawing cards, and connecting with your intuition.</p>
        <p>Discover the art of forming questions and interpreting card spreads to unveil the answers you seek.</p>
      </section>
    </div>
  );
};

export default Educational;
