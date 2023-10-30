import React, { useEffect, useState } from 'react';
import './Interpret.css';

const Interpret = ({generatedResponse}) => {
  const Response = generatedResponse.split('\n').filter(paragraph => paragraph.trim() !== ''); 
  
  const maxCards = 3;
  const headings = ['Heading 1', 'Heading 2', 'Heading 3'];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);


  return (
    <div className='interpret-container'>
      <h1 className='header-1'>Interpretation</h1>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p>{generatedResponse}</p>
      
      {Response.length > 0 ? (
        Response.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        headings.map((text, index) => (
        <div
          key={index}
          className={`${index === currentHeadingIndex ? '' : 'hidden'}`}
        >
          <p className='tracking-expand-contract'>{text}</p>
        </div>
  
      )))}

    </div>
  )
}

export default Interpret