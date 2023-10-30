import React, { useEffect, useState } from 'react';
import './Interpret.css';

const Interpret = ({generatedResponse, cards}) => {
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

      {response.length === 0 && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {response.length === 0 && (
        headings.map((text, index) => (
          <div
            key={index}
            className={`${index === currentHeadingIndex ? 'your-class-name' : 'hidden'}`}
          >
            <h2 className='tracking-expand-contract'>{text}</h2>
          </div>
        ))
      )}

      {response.length > 0 && (
        response.map((item, index) => (
        <div key={index}>
          <p>{cards[index]}</p>
          <img 
          className='card' 
          src={require(`../../assets/design-1/${index}.png`)}
          >
          </img>
          <p>{item}</p>
          <div></div>
        </div>
        ))
      )}

      {response.length > 0 && (
        <div>
            <div> 
                {response[response.length-1]}
            </div>
            <button>Restart</button>
        </div>
      )}

    </div>
  )
}

export default Interpret