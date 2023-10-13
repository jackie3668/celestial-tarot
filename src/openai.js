const response = await fetch(`${apiUrl}/sendMsgToOpenAI`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userMessage }),
  });
  