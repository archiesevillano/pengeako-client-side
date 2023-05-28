import React, { useState } from 'react';
import './pictureCards.css';

const PictureCard = ({ name, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClassName = `card ${isHovered ? 'hovered' : ''}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={cardClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="Chefs" />
        {isHovered && (
          <div className="overlay">
            <div className="socmed-icons">
              <a href="https://www.facebook.com/jlssrmnt/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
              </a>
              
            </div>
            <p>{name}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PictureCard;
