import React, { useState } from 'react';
import axios from 'axios';

function OpenAIChat() {
  const [userInput, setUserInput] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const sendMsgToOpenAI = async () => {
    try {
      console.log("User Input:", userInput);
      const response = await axios.post('https://celestial-tarot-api-505d7e2bd446.herokuapp.com/sendMsgToOpenAI', {
        userMessage: userInput,
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
    <div className="App">
      <h1>OpenAI</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
      <br />
      <button onClick={sendMsgToOpenAI}>Send to OpenAI</button>
      {generatedResponse && (
        <div>
          <h2>Generated Response:</h2>
          <p>{JSON.stringify(generatedResponse)}</p>
        </div>
      )}
    </div>
  );
}

export default OpenAIChat;
