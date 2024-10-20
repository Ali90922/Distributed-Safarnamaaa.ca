import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer'



function Boat() {
  const imageUrl = "./VictoriaBoat.JPG";
  return (
    <div className="image-container">
      <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
      <div className="image-text2">Victoria Bc.</div>
    </div>
  );
}

function Victoria() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9f6' }}>
      <header className="Ali" style={{}}>
        {/* Add a blank div with a height of 20px */}
        <div style={{ height: '20px' }}></div>
        <Navbar />
        <Boat />
        <Footer />

      </header>
    </div>
  );
}

export default Victoria;
