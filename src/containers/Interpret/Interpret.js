import React from 'react';
import './Interpret.css';

const Interpret = ({generatedResponse}) => {

  const maxCards = 3;


  return (
    <div className='interpret-container'>
      <h1 className='header-1'>Interpretation</h1>
      <p>{generatedResponse}</p>
      
    </div>
  )
}

export default Interpret