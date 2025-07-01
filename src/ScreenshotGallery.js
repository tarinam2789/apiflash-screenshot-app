import React from 'react';

function ScreenshotGallery({ screenshots }) {
  if (!screenshots.length) return null;

  return (
    <div className="screenshot-gallery">
      <h2>🖼️ All Captured Screenshots</h2>
      <div className="gallery-grid">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`screenshot-${index}`}
            className="screenshot-img"
            onError={(e) => {
              e.target.style.display = 'none';
              console.error("Failed to load screenshot:", src);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ScreenshotGallery;
