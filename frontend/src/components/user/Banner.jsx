import React, { useState, useEffect } from 'react';

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="banner-container relative h-48 md:h-96 overflow-hidden mb-5 md:rounded-xl rounded-md">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Banner ${index + 1}`}
          className={`banner-image ${
            index === currentIndex ? 'visible' : 'hidden'
          } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
        />
      ))}
    </div>
  );
};

export default Banner;
