import UserBtn from "../UserButton/userBtn";
import "./userPanel.css";
import FloatingNav from "../FloatingNav/floatingNav";
import Backdrop from "../Backdrop/backdrop";
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCart } from "../Context/Shopper";

const UserPanel = () => {
  const cart = useContext(UserCart);
  const [panelCart, setPanelCart] = useState([]);

  const navigate = useNavigate();
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);
  const floatingNavRef = useRef(null);

  const toggleFloatingNav = () => {
    setIsFloatingNavOpen(!isFloatingNavOpen);
  };

  const closeFloatNav = () => {
    setIsFloatingNavOpen(false);
  };

  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  useEffect(() => {
    setPanelCart(...cart);
  }, [cart]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        floatingNavRef.current &&
        !floatingNavRef.current.contains(e.target) &&
        !e.target.closest('.right')
      ) {
        closeFloatNav();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    closeFloatNav(); // Close the floating navigation menu when the component mounts or updates
  }, [navigate]);

  return (
    <div className="user-panel-container">
      <div className="left">
        <UserBtn iconName={"shopping_cart"} count={panelCart.length} action={() => handleClick('cart')} />
        <UserBtn iconName={"chat_bubble"} count={797} />
        <UserBtn iconName={"notifications"} count={797} />
      </div>
      <div className="right">
        <a onClick={toggleFloatingNav}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"
            alt="User"
          />
          <span>User123</span>
        </a>
        {isFloatingNavOpen && (
          <div ref={floatingNavRef}>
            <FloatingNav closeFloatNav={closeFloatNav} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPanel;
