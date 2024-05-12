import React from 'react';
import './Footer.css'; // Import the CSS file for styling


function AliTom() {
  const imageUrl = "./MeTom.jpg";
  return (
    <div className="image-container">
      <img className="ProfilePic" src={imageUrl} alt="Mountain Image" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-section">
          </div>
          <div className="footer-section">
            <div style={{ height: '20px' }}></div>
            <div className="alitom-container">
              <AliTom />
              <a href="https://www.linkedin.com/in/ali-nawaz-385a0b172/" className="social-link">LinkedIn</a>
              <a href="https://github.com/Ali90922" className="social-link">Github</a>

              <hr className="footer-line" /> {/* Horizontal line */}

              <p>&copy; {new Date().getFullYear()} Ali's سفرنامہ. All rights reserved. </p>

              <hr className="footer-line" /> {/* Horizontal line */}


            </div>
          </div>
        </div>
      </div>




      
  );
    </footer>
  );
}


export default Footer;



