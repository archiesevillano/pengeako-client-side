import React, { useState } from 'react';
import './debitCreditCard.css';
import AppButton from '../AppButton/appButton';

const DebitCreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (e) => {
    const formattedNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedNumber);
    detectCardType(formattedNumber);
  };

  const formatCardNumber = (number) => {
    const cleanedNumber = number.replace(/\D/g, '');
    const formattedNumber = cleanedNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedNumber;
  };

  const detectCardType = (number) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;

    if (visaPattern.test(number)) {
      setCardType('Visa');
    } else if (mastercardPattern.test(number)) {
      setCardType('Mastercard');
    } else {
      setCardType('');
    }
  };

  const handleConfirmClick = () => {
    // Handle confirm click event
  };

  return (
    <>
      <div className="card-input-container">
        <div className="cardno-container">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="19"
            required
          />
        </div>

        <div className="cvv-container">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            required
          />
        </div>

        <div className="expi-container">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            maxLength="5"
            required
          />
        </div>
      </div>
      <div className="paymentbtn-container">
        <AppButton label={'Confirm'} action={handleConfirmClick} />
        <div className="visa-masterCard">
          {cardType && <p>{cardType}</p>}
        </div>
      </div>
    </>
  );
};

export default DebitCreditCard;
