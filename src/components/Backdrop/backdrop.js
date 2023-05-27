import { motion, spring } from 'framer-motion';
import "./backdrop.css";
import React from 'react';

const Backdrop = ({ children, showBg, onClick }) => {

    return (

        <motion.div style={{ backgroundColor: showBg === undefined ? "background-color: rgba(0, 0, 0, 0)" : showBg === true ? "background-color: rgba(0, 0, 0, 0.9)" : "background-color: rgba(0, 0, 0, 0)" }} className='modal-backdrop'
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, type: spring }} exit={{ scale: 0, opacity: 0 }}
            onClick={onClick}>
            {children}
        </motion.div >

    );
}

export default Backdrop;