import React, { useEffect } from 'react';
import './Shuffle.css';
import { Link } from 'react-router-dom';

const Shuffle = ({ userInput }) => {
  useEffect(() => {
    console.log('SHUser Input:', userInput); // Access userInput here
  }, [userInput]);

  return (
    <div className='shuffle-container'>
      <h1>SHUFFLE</h1>
    </div>
  )
}

export default Shuffle;
