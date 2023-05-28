import React, { useEffect } from 'react';
import './confirmationModal.css';

const ConfirmationModal = ({ closeModal, navigateToDeliveries }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToDeliveries();
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigateToDeliveries]);

  return (
    <div className="modal-confirmation">
      <div className="modal-content-confirmation">
        <h2>Order Confirmed</h2>
        <p>Thank you for your order!</p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
