import React, { useState } from 'react';
import { Question, Shuffle, Interpret } from '../../containers';
import './Reading.css';

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
    <div className='reading-container'>
      <div className='component-container'>
        {elementVisibility.question && <Question userInput={userInput} setUserInput={setUserInput} handleQuestionClick={handleQuestionClick} handleQuestionKeyDown={handleQuestionKeyDown}/> }
        {elementVisibility.shuffle &&  <Shuffle userInput={userInput} onShuffleClick={onShuffleClick}/> }
        {elementVisibility.interpret &&  <Interpret userInput={userInput} /> }
      </div>
      {/* <div className="cloud-container">
        <div className="cloud1">
          <img className="cloud1-img" src={require('../../assets/cloud1.png')} alt="cloud" />
        </div>
        <div className="cloud2">
          <img className="cloud2-img" src={require('../../assets/cloud2.png')} alt="cloud" />
        </div>
        <div className="cloud3">
          <img className="cloud3-img" src={require('../../assets/cloud3.png')} alt="cloud" />
        </div>
        <div className="cloud4">
          <img className="cloud4-img" src={require('../../assets/cloud4.png')} alt="cloud" />
        </div>
        <div className="cloud5">
          <img className="cloud5-img" src={require('../../assets/cloud5.png')} alt="cloud" />
        </div>
        <div className="cloud6">
          <img className="cloud6-img" src={require('../../assets/cloud6.png')} alt="cloud" />
        </div>
        <div className="leftbirds">
          <img className="leftbirds-img" src={require('../../assets/leftbirds.png')} alt="birds" />
        </div>
        <div className="rightbirds">
          <img className="rightbirds-img" src={require('../../assets/rightbirds.png')} alt="birds" />
        </div>
      </div> */}
    </div>
  );
}

export default Reading;
