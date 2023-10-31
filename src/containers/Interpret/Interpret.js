import React, { useEffect, useState } from 'react';
import './Interpret.css';

const Interpret = ({generatedResponse, cards, reversed, indices}) => {
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
      <h1 className='header-1'>Interpretation</h1>

      {/* {response.length === 0 && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>} */}
      {/* {response.length === 0 && (
        headings.map((text, index) => (
          <div
            key={index}
            className={`${index === currentHeadingIndex ? 'your-class-name' : 'hidden'}`}
          >
            <h2 className='tracking-expand-contract'>{text}</h2>
          </div>
        ))
      )} */}

      {response.length > 0 ? (
        response.slice(0, -1).map((item, index) => (
          <div key={index}>
            <h3 className='header-3'>        
              {cards[index]}
              {reversed[index] === 0 ? ': Upright' : ' : Reversed'}
            </h3>

            <div className='card-wrapper'>
              <img 
                className='card' 
                src={require(`../../assets/design-1/${indices[index]}.png`)}
              />
              <p className='card-interpretation'>{item}</p>
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
              <h2 className='tracking-expand-contract'>{text}</h2>
            </div>
          ))}
        </>
      )}

      {response.length > 0 && (
        <div>
            <p className='card-interpretation'> 
                {response[response.length-1]}
            </p>
            <button className='button'>Restart</button>
        </div>
      )}

    </div>
  )
}

export default Interpret