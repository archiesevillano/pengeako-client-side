import React, { useState, useRef, useEffect } from 'react';
import './checkOut.css';
import PaymentMethod from '../PaymentMethod/paymentMethod';
import AppButton from '../AppButton/appButton';
import CloseButton from '../CloseButton/closeButton';
import { useNavigate } from 'react-router-dom';

import Backdrop from '../Backdrop/backdrop';


const CheckOutModal = ({ closeModal, orderDetails, handlePaymentMethod }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const modalContentRef = useRef();

  const handleSubmit = () => {
    // Handle submit logic here
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
      closeModal();
      navigateToDeliveries();
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowConfirmation(false);
    closeModal();
  };

  const navigateToDeliveries = () => {
    navigate('/profile/deliveries');
  };

  const handleClickOutside = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Backdrop showBg={true} onClick={handleClickOutside}>
      <div className="modal-checkout">
        <div className="modal-content-checkout" ref={modalContentRef}>
          <div className='order-details-container'>
            <div className="checkouthead-container">
              <div className='orderdetails-txt'>
              <h2>Order Details:</h2>
              </div>
              <div>
                {/* Display order details */}
              <p>{orderDetails}</p>
              </div>
              
            </div>
            
          </div>
          <div className='payment-method-container'>
            <div className='payment-cls-btn'>
              <PaymentMethod handlePaymentMethod={handlePaymentMethod} />
              <div className="checkout-clsbtn">
                <CloseButton action={handleCloseModal}>Close</CloseButton>
              </div>
            </div>
            <div className="checkout-btn-container">
              <AppButton className="submit-checkout-btn"  label={'Place Order'} clickAction={handleSubmit}/>
              
            </div>
          </div>
        </div>  
      </div>
    </Backdrop>
  );
};

export default CheckOutModal;
