import React from 'react';
import './PhotoGallery.css';

const PhotoGallery: React.FC = () => {
  return (
    <div className="photo-gallery">
      <div className="photo-container" onClick={() => handleAnimation('photo1')}>
        <img className="photo" id="photo1" src="./Story1.JPG" alt="Photo 1" />
        <div className="overlay">View from Khaplu Palace</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo2')}>
        <img className="photo" id="photo2" src="./Tower.JPG" alt="Photo 2" />
        <div className="overlay">Unamed Tower </div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo3')}>
        <img className="photo" id="photo3" src="./Story3.JPG" alt="Photo 3" />
        <div className="overlay">Amin Brakk Trailhead</div>
      </div>
    </div>
  );
};

const handleAnimation = (id: string) => {
  const photo = document.getElementById(id);
  if (photo) {
    photo.classList.add('animate');
    setTimeout(() => {
      photo.classList.remove('animate');
    }, 1000); // Duration of the animation in milliseconds
  }
};

export default PhotoGallery;
