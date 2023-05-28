import React, { useState } from 'react';
import GCash from '../Gcash/gCash';
import DebitCreditCard from '../DebitCreditCard/debitCreditCard';
import './paymentMethod.css';
import CardIcon from '../visaMasterCard/visaMasterCard';

const PaymentMethod = ({ handlePaymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodClick = (method) => {
    if (selectedMethod === method) {
      setSelectedMethod('');
      handlePaymentMethod('');
    } else {
      setSelectedMethod(method);
      handlePaymentMethod(method);
    }
  };

  return (
    <div className="payment-method">
      <h2>Payment Method:</h2>
      <div
        className={`payment-select ${selectedMethod === 'cash-on-delivery' ? 'selected' : ''}`}
        onClick={() => handleMethodClick('cash-on-delivery')}
      >
        <div className="paymentTitle-container">
          <div className="payment-icons">
            <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fpngwing.com%20(36).png?alt=media&token=3740c195-40f9-4c97-8bc3-df2a49b662ae" />
          </div>
          <div>
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </div>
        </div>

        <input
          type="radio"
          id="cash-on-delivery"
          name="payment-method"
          value="cash-on-delivery"
          checked={selectedMethod === 'cash-on-delivery'}
          onChange={() => {}}
        />
      </div>
      <div
        className={`payment-select ${selectedMethod === 'gcash' ? 'selected' : ''}`}
        onClick={() => handleMethodClick('gcash')}
      >
        <div className="paymentTitle-container">
          <div className="payment-icons">
            <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FGCash.png?alt=media&token=02fe19b9-92de-4b6c-8824-45d27fcc7ce9" />
          </div>
          <label htmlFor="gcash">GCash</label>
        </div>
        <input
          type="radio"
          id="gcash"
          name="payment-method"
          value="gcash"
          checked={selectedMethod === 'gcash'}
          onChange={() => {}}
        />
      </div>
      <div
        className={`payment-select ${selectedMethod === 'debit-credit-card' ? 'selected' : ''}`}
        onClick={() => handleMethodClick('debit-credit-card')}
      >
        <div className="paymentTitle-container">
          <div className="payment-icons">
            <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FDebitCredit.png?alt=media&token=b56a84a2-c02a-4682-9d00-9ebb9cd2f728" />
          </div>
          <label htmlFor="debit-credit-card">Debit/Credit Card</label>
        </div>
        <input
          type="radio"
          id="debit-credit-card"
          name="payment-method"
          value="debit-credit-card"
          checked={selectedMethod === 'debit-credit-card'}
          onChange={() => {}}
        />
      </div>
      {selectedMethod === 'gcash' && <GCash />}
      {selectedMethod === 'debit-credit-card' && (
        <div>
          <DebitCreditCard />
          <CardIcon cardType={selectedMethod} />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
