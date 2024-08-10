import React from 'react';
import './PhotoGallery.css';

const PhotoGallery: React.FC = () => {
  return (
    <div className="photo-gallery">
      <div className="photo-container" onClick={() => handleAnimation('photo1')}>
        <img className="photo" id="photo1" src="./Max1.JPG" alt="Photo 1" />
        <div className="overlay">View from Kanday Village</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo2')}>
        <img className="photo" id="photo2" src="./Max2.JPG" alt="Photo 2" />
        <div className="overlay">Nangma Campsite  </div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo3')}>
        <img className="photo" id="photo3" src="./Max3.JPG" alt="Photo 3" />
        <div className="overlay">Geyari Resort Khaplu</div>
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
