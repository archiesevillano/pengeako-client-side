import { motion, spring } from 'framer-motion';
import "./backdrop.css";
import React from 'react';

const Backdrop = ({ children, showBg, onClick }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <motion.div
      style={{
        backgroundColor: showBg === undefined ? "rgba(0, 0, 0, 0)" : showBg === true ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)",
      }}
      className='modal-backdrop'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, type: spring }}
      exit={{ scale: 0, opacity: 0 }}
      onClick={handleBackdropClick}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
