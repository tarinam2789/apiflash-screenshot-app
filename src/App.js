import React, { useState } from 'react';
import ScreenshotForm from './ScreenshotForm';
import ScreenshotGallery from './ScreenshotGallery';
import './App.css';

function App() {
  const [screenshots, setScreenshots] = useState([]);

  const handleCapture = (newUrl) => {
    setScreenshots((prev) => [newUrl, ...prev]);
  };

  return (
    <div className="app-container">
      <h1>📸 Website Screenshot App</h1>
      <ScreenshotForm onCapture={handleCapture} />
      <ScreenshotGallery screenshots={screenshots} />
    </div>
  );
}

export default App;
