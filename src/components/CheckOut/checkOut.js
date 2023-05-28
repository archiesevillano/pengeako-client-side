import React, { useState } from 'react';
import './checkOut.css';
import PaymentMethod from '../PaymentMethod/paymentMethod';
import AppButton from '../AppButton/appButton';
import CloseButton from '../CloseButton/closeButton';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/confirmationModal';

const CheckOutModal = ({ closeModal, orderDetails, handlePaymentMethod }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

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
    navigate(`/profile/deliveries`);
    
  };

  return (
    <div className="modal-checkout">
      <div className="modal-content-checkout">
        <div className='checkouthead-container'>
          <h2>Order Details:</h2>
          <div className='checkout-clsbtn'>
            <CloseButton action={handleCloseModal}>Close</CloseButton>
          </div>
        </div>

        {/* Display order details */}
        <p>{orderDetails}</p>
        {/* Display mode of payment */}
        <PaymentMethod handlePaymentMethod={handlePaymentMethod} />
        {/* Close button */}
        <div className='checkout-btn-container'>
          {/* Submit button */}
          <button className='submit-checkout-btn' onClick={handleSubmit}>Proceed</button>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationModal closeModal={handleCloseModal} navigateToDeliveries={navigateToDeliveries} />
      )}
    </div>
  );
};

export default CheckOutModal;
