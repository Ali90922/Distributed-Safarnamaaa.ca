// ScrollWithUser.js
import React, { useState, useEffect } from 'react';
import './ScrollWithUser.css'; // Import CSS for styling

function ScrollWithUser() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-with-user-container">
      <div className="scroll-with-user-text" style={{ top: `${scrollPosition}px` }}>
      </div>
    </div>
  );
}

export default ScrollWithUser;
