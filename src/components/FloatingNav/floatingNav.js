import React, { useState, useRef } from 'react';
import './floatingNav.css';
import { Link, useNavigate } from 'react-router-dom';

const FloatingNav = ({ image }) => {
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

    return (
        <nav className="floating-nav" onClick={(e) => e.stopPropagation()}>
            <div className="upper-content">
                <div className="profile-section">
                    <div className="top">
                        <div className="user-image">
                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : image} />
                            <button type="button" className="update-image-btn" onClick={() => fileInputRef.current.click()}>
                                <span className="material-symbols-outlined">
                                    add_a_photo
                                </span>
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
                        <button type="button" className="account-settings-btn" onClick={() => handleClick('manage-account')}>
                            Manage Account
                        </button>
                    </div>
                </div>
                <hr />
                <div className="major-navs">
                    <button type="button" onClick={() => handleClick('deliveries')}>
                        <span className="material-symbols-outlined">
                            local_shipping
                        </span>
                        Deliveries
                    </button>

                    <button type="button" onClick={() => handleClick('purchases')}>
                        <span className="material-symbols-outlined">
                            receipt_long
                        </span>
                        My Purchases
                    </button>
                    <button type="button" onClick={() => handleClick('my-coupons')}>
                        <span className="material-symbols-outlined">
                            loyalty
                        </span>
                        My Coupons
                    </button>
                </div>
            </div>
            <ul className="floating-links">
                <li>
                    <Link to="/profile/my-favorites">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                        My Favorites
                    </Link>
                </li>
                <li>
                    <Link to="/profile/my-ratings">
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        My Ratings
                    </Link>
                </li>

            </ul>
            <button className="logout-btn">
                <span className="material-symbols-outlined">
                    logout
                </span>
                Log Out
            </button>
        </nav>
    );
}

export default FloatingNav;
