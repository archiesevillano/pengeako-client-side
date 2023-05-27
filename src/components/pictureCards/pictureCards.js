import React, { useState } from 'react';
import './pictureCards.css'

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
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <p>{name}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PictureCard;
