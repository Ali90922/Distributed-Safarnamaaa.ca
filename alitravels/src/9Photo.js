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
        <div className="overlay">Unamed Tower</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo3')}>
        <img className="photo" id="photo3" src="./Story3.JPG" alt="Photo 3" />
        <div className="overlay">Amin Brakk Trailhead</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo4')}>
        <img className="photo" id="photo4" src="./Story4.JPG" alt="Photo 4" />
        <div className="overlay">Photo 4 Description</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo5')}>
        <img className="photo" id="photo5" src="./Story5.JPG" alt="Photo 5" />
        <div className="overlay">Photo 5 Description</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo6')}>
        <img className="photo" id="photo6" src="./Story6.JPG" alt="Photo 6" />
        <div className="overlay">Photo 6 Description</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo7')}>
        <img className="photo" id="photo7" src="./Story7.JPG" alt="Photo 7" />
        <div className="overlay">Photo 7 Description</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo8')}>
        <img className="photo" id="photo8" src="./Story8.JPG" alt="Photo 8" />
        <div className="overlay">Photo 8 Description</div>
      </div>
      <div className="photo-container" onClick={() => handleAnimation('photo9')}>
        <img className="photo" id="photo9" src="./Story9.JPG" alt="Photo 9" />
        <div className="overlay">Photo 9 Description</div>
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
