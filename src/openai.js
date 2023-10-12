export async function sendMsgToOpenAI(userMessage) {
  try {
    console.log('Before fetch:', userMessage);

    const responseFromAPI = await fetch('http://ec2-3-21-92-197.us-east-2.compute.amazonaws.com/api/sendMsgToOpenAI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage }),
    });

    console.log('After fetch:', responseFromAPI);

    if (responseFromAPI.ok) {
      const data = await responseFromAPI.json();
      console.log('Data from API:', data);
      return data;
    } else {
      console.error('Error making a request to the backend API');
      throw new Error('Error making a request to the backend API');
    }
  } catch (error) {
    console.error('Error in sendMsgToOpenAI:', error);
    throw error;
  }
}
