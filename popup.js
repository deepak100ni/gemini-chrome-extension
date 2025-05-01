document.getElementById('bloomfire-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const inputText = document.getElementById('input-text').value;
    const responseText = document.getElementById('response-text');
  
    try {
      const apiKey = '<Replace with your API>';
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: inputText }]
          }]
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      // Extract the generated text from the response (adjust based on actual API response structure)
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No content generated';
      responseText.textContent = generatedText;
      responseText.classList.remove('hidden');
    } catch (error) {
      responseText.textContent = `Error: ${error.message}`;
      responseText.classList.remove('hidden');
    }
});
  
  document.getElementById('copy-button').addEventListener('click', () => {
    const responseText = document.getElementById('response-text').textContent;
    navigator.clipboard.writeText(responseText).then(() => {
      alert('Response copied to clipboard!');
    }).catch((err) => {
      alert('Failed to copy: ' + err);
    });
  });