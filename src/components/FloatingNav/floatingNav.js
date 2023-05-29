import React, { useState, useRef, useEffect } from 'react';
import './floatingNav.css';
import { Link, useNavigate } from 'react-router-dom';
import { removeCookie } from '../../AppCookies';

const FloatingNav = ({ image, logout }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const closeFloatNav = () => {
    setIsOpen(false);
  };

  const handleClick = (route) => {
    navigate(`/profile/${route}`);
    closeFloatNav();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleLogout = () => {
    // Remove 'auth-token' from the cookie section for clean up
    removeCookie('auth-token');
    logout(true);
    navigate("/");
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.floating-nav')) {
      closeFloatNav();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`floating-nav ${isOpen ? 'open' : ''}`}>
      <div className="upper-content">
        <div className="profile-section">
          <div className="top">
            <div className="user-image">
              {selectedImage ? (
                <img src={URL.createObjectURL(selectedImage)} alt="User" />
              ) : (
                <div className="placeholder-image">
                  <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1' alt='User Image'/>
                </div>
              )}
              <button
                type="button"
                className="update-image-btn"
                onClick={() => fileInputRef.current.click()}
              >
                <span className="material-symbols-outlined">add_a_photo</span>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
              </button>
            </div>
            <div className="user-names">
              <p>User 123</p>
              <span>user123@gmail.com</span>
            </div>
          </div>
          <div className="bottom">
            <button
              type="button"
              className="account-settings-btn"
              onClick={() => handleClick('manage-account')}
            >
              Manage Account
            </button>
          </div>
        </div>
        <hr />
        <div className="major-navs">
          <button type="button" onClick={() => handleClick('deliveries')}>
            <span className="material-symbols-outlined">local_shipping</span>
            Deliveries
          </button>

          <button type="button" onClick={() => handleClick('purchases')}>
            <span className="material-symbols-outlined">receipt_long</span>
            My Purchases
          </button>
          <button type="button" onClick={() => handleClick('my-coupons')}>
            <span className="material-symbols-outlined">loyalty</span>
            My Coupons
          </button>
        </div>
      </div>
      <ul className="floating-links">
        <li>
          <Link to="/profile/favorites">
            <span className="material-symbols-outlined"></span>
            My Favorites
          </Link>
        </li>
        <li>
          <Link to="/profile/ratings">
            <span className="material-symbols-outlined"></span>
            My Ratings
          </Link>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        <span className="material-symbols-outlined">logout</span>
        Log Out
      </button>
    </nav>
  );
};

export default FloatingNav;
