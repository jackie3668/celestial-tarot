import React, { useState } from 'react';
import { Question, Shuffle, Interpret } from '../../containers';

const Reading = () => {
  const [elementVisibility, setElementVisibility] = useState({
    question: true,
    shuffle: false,
    interpret: false
  });

  const [userInput, setUserInput] = useState('');

  const handleQuestionClick = () => {
    setElementVisibility({
      ...elementVisibility, 
      question: false, 
      shuffle: true
    })
  }

  const handleQuestionKeyDown = (e) => {
    if (e.key === "Enter") {
      setElementVisibility({
        ...elementVisibility, 
        question: false, 
        shuffle: true
      })
    }
  }

  const onShuffleClick = () => {
    setElementVisibility({
      ...elementVisibility, 
      shuffle: false,
      interpret: true
    })
  }

  return (
    <div>
      {elementVisibility.question && <Question userInput={userInput} setUserInput={setUserInput} handleQuestionClick={handleQuestionClick} handleQuestionKeyDown={handleQuestionKeyDown}/> }
      {elementVisibility.shuffle &&  <Shuffle userInput={userInput} onShuffleClick={onShuffleClick}/> }
      {elementVisibility.interpret &&  <Interpret userInput={userInput} /> }
    </div>
  );
}

export default Reading;
