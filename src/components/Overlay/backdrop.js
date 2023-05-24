import { motion, spring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "./backdrop.css";
import React from 'react';

const Backdrop = ({ children }) => {
    const navigate = useNavigate();

    const closeModal = () => {

        navigate(-1);
    }

    const childElements = React.Children.map(children, child => {
        return React.cloneElement(child, { closeModal: closeModal });
    });


    return (
        <motion.div className='modal-backdrop' onClick={closeModal}
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, type: spring }} exit={{ scale: 0, opacity: 0 }}>
            {childElements}
        </motion.div >
    );
}

export default Backdrop;