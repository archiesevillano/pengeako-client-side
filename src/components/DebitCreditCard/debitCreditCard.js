import React, { useState } from 'react';
import CardIcon from '../visaMasterCard/visaMasterCard';
import './debitCreditCard.css';

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
      setCardType('visa');
    } else if (mastercardPattern.test(number)) {
      setCardType('mastercard');
    } else {
      setCardType('');
    }
  };

  const handleCvvChange = (e) => {
    const formattedCvv = formatCvv(e.target.value);
    setCvv(formattedCvv);
  };

  const formatCvv = (cvv) => {
    const cleanedCvv = cvv.replace(/\D/g, '');
    return cleanedCvv;
  };

  const handleExpirationDateChange = (e) => {
    const formattedExpirationDate = formatExpirationDate(e.target.value);
    setExpirationDate(formattedExpirationDate);
  };

  const formatExpirationDate = (expirationDate) => {
    const cleanedExpirationDate = expirationDate.replace(/\D/g, '');
    const formattedExpirationDate = cleanedExpirationDate.replace(/(\d{2})(?=\d)/g, '$1/');
    return formattedExpirationDate;
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
            onChange={handleCvvChange}
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
            onChange={handleExpirationDateChange}
            maxLength="5"
            required
          />
        </div>
        {cardType && (
  <div>
    <CardIcon cardType={cardType} />
  </div>
)}
      </div>
    </>
  );
};

export default DebitCreditCard;
