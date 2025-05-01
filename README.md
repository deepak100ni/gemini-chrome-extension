# gemini-chrome-extension

## Overview
**gemini-chrome-extension** is a simple Google Chrome extension that allows users to submit queries and get instant responses using the Gemini API. Whether you're curious about AI, coding, or any other topic, gemini-chrome-extension provides a clean and intuitive interface to get answers directly in your browser. 🌟

## Demo Video
Check out the demo video to see gemini-chrome-extension in action!  
🎥 [Watch the Demo on YouTube](https://youtu.be/GHwZMx5_FCw)

## Features
- **Query Submission**: Enter any question or query in the input field.
- **Instant Responses**: Powered by the Gemini API to provide accurate answers.
- **Copy to Clipboard**: Easily copy the response with a single click.
- **Clean UI**: Modern, card-based design with a professional look.
- **Free Tier**: Supports up to 1,500 free requests per day (as per Gemini API free tier limits).

## Installation
1. **Download the Extension**:
   - Clone this repository or download the ZIP file:
     ```bash
     git clone https://github.com/your-username/gemini-chrome-extension.git
     ```
   - Alternatively, if published, download from the [Chrome Web Store](#) (replace with actual link if available).

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (toggle in the top-right corner).
   - Click "Load unpacked" and select the `gemini-chrome-extension` folder.

3. **Set Up Your API Key**:
   - Obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey) or the relevant Gemini API portal.
   - Open `popup.js` and replace `'GEMINI_API_KEY'` with your actual API key:
     ```javascript
     const apiKey = 'YOUR_GEMINI_API_KEY';
     ```

## Usage
1. Click the gemini-chrome-extension extension icon in your Chrome toolbar to open the popup.
2. Enter your query in the "Enter your query" field (e.g., "Explain how AI works").
3. Click the "SUBMIT" button to send your query to the Gemini API.
4. View the response in the "Response" section below.
5. Use the "Copy" button to copy the response to your clipboard.

## Project Structure
gemini-chrome-extension/
├── manifest.json       # Chrome extension configuration
├── popup.html          # Popup UI structure
├── popup.js            # Logic for API calls and clipboard functionality
├── styles.css          # Styling for the popup UI
└── README.md           # Project documentation


## Setup for Developers
If you'd like to modify or contribute to gemini-chrome-extension, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gemini-chrome-extension.git
   cd gemini-chrome-extension

Install Dependencies:
No external dependencies are required since this is a simple Chrome extension using vanilla JavaScript.

Modify the API Key:
Update the apiKey variable in popup.js with your Gemini API key (as shown in the Installation section).

Test Locally:
Load the extension in Chrome as described in the Installation section.

Make changes to the code and reload the extension (chrome://extensions/, click "Reload") to test.

API Rate Limits:
The Gemini API free tier allows 1,500 requests per day, with limits of 15 requests per minute (RPM) and 1,000,000 tokens per minute (TPM). Be mindful of these limits during testing.

Contributing
Contributions are welcome! To contribute:
Fork the repository.

```Create a new branch for your feature or bug fix:```

```git checkout -b feature/your-feature-name```

```Make your changes and commit them:```

```git commit -m "Add your feature description"```

```Push to your fork```

```git push origin feature/your-feature-name```
