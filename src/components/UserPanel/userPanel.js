import UserBtn from "../UserButton/userBtn";
import "./userPanel.css";
import FloatingNav from "../FloatingNav/floatingNav";
import Backdrop from "../Backdrop/backdrop";
import React, { useState, useEffect, useRef } from 'react';


import "./userPanel.css";
const UserPanel = () => {

    const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);
    const floatingNavRef = useRef(null);

    const toggleFloatingNav = () => {
        setIsFloatingNavOpen(!isFloatingNavOpen);
    };

    useEffect(() => {
        const closeFloatingNav = () => {
            setIsFloatingNavOpen(false);
        };

        const handleDocumentClick = (e) => {
            if (
                floatingNavRef.current &&
                !floatingNavRef.current.contains(e.target) &&
                !e.target.closest(".right")
            ) {
                closeFloatingNav();
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="user-panel-container">
            <div className="left">
                <UserBtn iconName={"shopping_cart"} count={797} />
                <UserBtn iconName={"chat_bubble"} count={797} />
                <UserBtn iconName={"notifications"} count={797} />
            </div>
            <div className="right">
                <a onClick={toggleFloatingNav}>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"} />
                    <span>User123</span>
                </a>
            </div>
            {isFloatingNavOpen && (
                <>
                    <div className="floating-nav-container" ref={floatingNavRef}>
                        <Backdrop showBg={true} onClick={toggleFloatingNav} />
                        <FloatingNav />
                    </div>
                </>
            )}
        </div>
    );
}

export default UserPanel;
