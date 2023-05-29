import React, { useState, useRef, useEffect } from 'react';
import './ratingsCard.css';
import LineField from '../LineField/lineField';
import AppButton from '../AppButton/appButton';
import CloseButton from '../CloseButton/closeButton';

const Ratings = ({ name, image }) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRatingChange = (newRating) => {
    if (!isConfirmed) {
      setRating(newRating);
    }
  };

  const handleConfirmation = () => {
    setIsConfirmed(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="ratings-container">
        
      </div>

      {showModal && (
        <div className="ratings-modal">
          <div className="ratings-modal-content" ref={modalRef}>
            <div className="ratings-header">
              <div className="ratings-header-icon">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div className="ratings-header-text">
                <div className="header-text">
                  <h4>Rate and review:</h4>
                  <span>We appreciate your feedback</span>
                </div>
                <div className="close-btn-container">
                  <button className="ratings-modal-close" onClick={handleCloseModal}>
                    <i className="fa-solid fa-x fa-2xs"></i>
                  </button>
                </div>
              </div>
            </div>

            <hr className="ratingsline" />

            <div className="ratings-body">
              <div className="ratings-user-info">
                <div className="ratings-profile-pic">
                  <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fpeople%2F41659007_2287628741474395_6037267822399193088_n.jpg?alt=media&token=39e1547c-fa9b-46ab-b16e-d222c753b712" alt="Profile Picture" />
                </div>
                <div className="raters-name">
                  <p>{name}Alden Richards</p>
                </div>
              </div>

              <div className="ratings-comment">
                <div className="starcontainer">
                  <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={index < rating ? 'star filled' : 'star'}
                        onClick={() => handleRatingChange(index + 1)}
                        onMouseEnter={() => handleRatingChange(index + 1)}
                        onMouseLeave={() => handleRatingChange(0)}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>

                <div className="raters-inputfield">
                  <LineField type="text" placeholder="" />
                </div>
              </div>

              <div className="ratings-sub-btn">
                {!isConfirmed ? (
                  <AppButton label={'Submit'} onClick={handleConfirmation} />
                ) : (
                  <p>Rating Confirmed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ratings;
