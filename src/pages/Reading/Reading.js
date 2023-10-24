import React, { useState } from 'react';
import { Question, Shuffle } from '../../containers';

const Reading = () => {
  const [elementVisibility, setElementVisibility] = useState({
    question: true,
    shuffle: false,
  });

  const [userInput, setUserInput] = useState('hello');
  console.log('Reading', {userInput})

  const handleQuestionClick = () => {
    setElementVisibility({
      ...elementVisibility, 
      question: false, 
      shuffle: true})
  }

  return (
    <div>
      {elementVisibility.question && <Question userInput={userInput} setUserInput={setUserInput} handleQuestionClick={handleQuestionClick}/> }
      {elementVisibility.shuffle &&  <Shuffle userInput={userInput} /> }
    </div>
  );
}

export default Reading;
