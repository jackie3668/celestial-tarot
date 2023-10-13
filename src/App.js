import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function App() {
  const [userInput, setUserInput] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const sendMsgToOpenAI = async () => {
    try {
      console.log("User Input:", userInput);
      const response = await axios.post('http://localhost:3009/sendMsgToOpenAI', {
        userMessage: userInput, // Send userMessage directly as an object property
      });
    
      console.log("Axios Response:", response);

      if (response.status === 200) { // Check response status code
        const data = response.data;
        console.log("Data:", data.generatedResponse);
        setGeneratedResponse(data);
      } else {
        console.error('Error making a request to the backend API');
      }
    } catch (error) {
      console.error('Error:', error);
    }    
  }

  return (
    <div className="App">
      <h1>OpenAI Chat</h1>
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

export default App;
