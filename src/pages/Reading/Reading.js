import React, { useState } from 'react';
import { Question, Shuffle, Interpret } from '../../containers';
import './Reading.css';
import axios from 'axios';

const Reading = () => {
  const [elementVisibility, setElementVisibility] = useState({
    question: true,
    shuffle: false,
    interpret: false
  });

  const [userInput, setUserInput] = useState('');
  const [cardsNum, setCardsNum] = useState(3);
  const [cards, setCards] = useState([]);
  const [indices, setIndices] = useState([]);
  const [reversed, setReversed] = useState([]);

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

  const [generatedResponse, setGeneratedResponse] = useState('');
  const onShuffleClick =  async () => {

    setElementVisibility({
      ...elementVisibility, 
      shuffle: false,
      interpret: true
    })

    try {

      const prompt ='My question is: ' + userInput + 'There are a total number of ' + cardsNum + ' cards that I drawn. The cards I got are: ' + cards + ' the way they are facing are as indicated in this array, 0 for upright, 1 for reversed, respectively:' + reversed + '. Give a paragraph interpretation per card(50 words, separated by line break) starting with the card name and taking upright/reverse into account. Lastly, give one paragraph summary(75words). Always try to give straightforward clear answers. If my question is in chinese, please return the response in chinese too.' 
      console.log(prompt)
      const response = await axios.post('https://celestial-tarot-api-505d7e2bd446.herokuapp.com/sendMsgToOpenAI', {
        userMessage: prompt,
      });

      console.log("Axios Response:", response);

      if (response.status === 200) { 
        const data = response.data;
        console.log("Data:", data.generatedResponse);
        setGeneratedResponse(data.generatedResponse);
      } else {
        console.error('Error making a request to the backend API');
      }
    } catch (error) {
      console.error('Error:', error);
    }    
  }

  return (
    <div className='reading-container'>
      <div className='component-container'>
        {elementVisibility.question && <Question 
        userInput={userInput} 
        setUserInput={setUserInput} 
        handleQuestionClick={handleQuestionClick} 
        handleQuestionKeyDown={handleQuestionKeyDown}
        /> }

        {elementVisibility.shuffle &&  <Shuffle 
        userInput={userInput} 
        onShuffleClick={onShuffleClick} 
        cardsNum={cardsNum} 
        setCardsNuM={setCardsNum} 
        cards={cards} 
        setCards={setCards} 
        reversed={reversed}
        setReversed={setReversed}
        indices={indices} 
        setIndices={setIndices}
        /> }

        {elementVisibility.interpret &&  <Interpret 
        userInput={userInput} 
        cardsNum={cardsNum} 
        cards={cards}
        generatedResponse={generatedResponse} 
        indices={indices}
        /> }
      </div>
      <div className="cloud-container">
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
      </div>
    </div>
  );
}

export default Reading;
