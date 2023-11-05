import React, { useEffect, useState } from 'react';
import './Interpret.css';

const Interpret = ({generatedResponse, cards, reversed, indices, handleRestart}) => {
  const response = generatedResponse.split('\n').filter(paragraph => paragraph.trim() !== ''); 
  
  const maxCards = 3;
  const headings = ['Channeling the Spirit...', 'Calling the Divine...', 'Unlocking Mystical Insights...', 'Seeking Guidance from the Stars...', 'Harmonizing Mind and Soul...', 'Awakening Your True Self...'];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  
  return (
    <div className='interpret-container'>
      <div className='interpretation-container'>
        {response.length > 0 ? (
          response.slice(0, -1)
          .filter(item => item.split(' ').length > 10)
          .map((item, index) => (
            <div key={index} className='card-wrapper'>
              <h3 className='header-3'>        
                {cards[index]}
                {reversed[index] === 0 ? ': Upright' : ' : Reversed'}
              </h3>

              <div className='card-img-text-wrapper'>
                <img 
                  className='card' 
                  src={require(`../../assets/design-1/${indices[index]}.png`)}
                />
                <p className='card-interpretation-text text'>{item}</p>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {headings.map((text, index) => (
              <div
                key={index}
                className={`${index === currentHeadingIndex ? 'your-class-name' : 'hidden'}`}
              >
                <h2 className='tracking-expand-contract header-2'>{text}</h2>
              </div>
            ))}
          </>
        )}

        {response.length > 0 && (
          <div className='summary-text'>
              <h3 className='header-3'>Summary</h3>
              <p className='card-interpretation-text text'> 
                  {response[response.length-1]}
              </p>
              <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Interpret