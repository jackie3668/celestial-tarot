import React, { useState } from 'react';
import { sendMsgToOpenAI } from './openai';

function App() {
  const [userInput, setUserInput] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendRequest = async () => {
    try {
      const response = await sendMsgToOpenAI(userInput); 
      setGeneratedResponse(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>OpenAI Test</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your message..."
        value={userInput}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <button onClick={handleSendRequest}>Send to OpenAI</button>
      {generatedResponse && (
        <div>
          <h2>Generated Response:</h2>
          <p>{generatedResponse}</p>
        </div>
      )}
    </div>
  );
}

export default App;