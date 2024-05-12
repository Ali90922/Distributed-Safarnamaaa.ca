import React from 'react';
import './App.css'; // Import the CSS file

function ImageComponent() {
  const imageUrl = "Parbat.JPG";

  return (
    <div className="image-container">
        <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
        <div className="image-text">ننگا پربت</div>
        <div className="date-text">June 26 - 2021 - 7:14 PM  Apple iPhone 11</div>
        <div className="date-text4">35.2375° N, 74.5891° E</div>
    </div>
  );
}

export default ImageComponent;
