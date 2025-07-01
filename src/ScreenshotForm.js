import React, { useState } from 'react';

function ScreenshotForm({ onCapture }) {
  const [url, setUrl] = useState('');
  const [width, setWidth] = useState('1280');
  const [height, setHeight] = useState('720');

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = 'aa4858bfb7284f81a3cde3507fab048c'; 
    const cleanUrl = url.startsWith("http") ? url : `https://${url}`;
    const apiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${apiKey}&url=${encodeURIComponent(cleanUrl)}&width=${width}&height=${height}&fresh=true&timestamp=${Date.now()}`;

    console.log("Screenshot URL:", apiUrl);
    onCapture(apiUrl);
    setUrl('');
  };

  return (
    <form className="screenshot-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button type="submit">Capture Screenshot</button>
    </form>
  );
}

export default ScreenshotForm;
