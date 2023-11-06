import React, { useState, useEffect } from 'react';

function SerialBulb() {
  const [currentBulbIndex, setCurrentBulbIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBulbIndex((prevIndex) => (prevIndex + 1) % 8);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const bulbs = Array(8).fill(null);

  return (
    <div className="bulb-row">
      {bulbs.map((_, index) => (
        <img
          key={index}
          src={index === currentBulbIndex ? 'https://www.w3schools.com/js/pic_bulbon.gif' : 'https://www.w3schools.com/js/pic_bulboff.gif'}
          alt="Bulb"
        />
      ))}
    </div>
  );
}

export default SerialBulb;
