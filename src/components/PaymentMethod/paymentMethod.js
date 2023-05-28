import React, { useState } from 'react';
import './paymentMethod.css';


const PaymentMethod = ({ handlePaymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  

  

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
    handlePaymentMethod(method);
  };

  return (
    <div className="payment-method">
      <h2>Payment Method:</h2>
      <div
        className={`payment-select ${selectedMethod === 'cash-on-delivery' ? 'selected' : ''}`}
        onClick={() => handleMethodClick('cash-on-delivery')}
      ><div>
        <i class="fa-solid fa-money-bill"></i>
        <label htmlFor="cash-on-delivery"> Cash on Delivery</label>
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
        <label htmlFor="gcash">GCash</label>
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
        <div><i class="fa-brands fa-cc-visa"></i>
        <label htmlFor="debit-credit-card"> Debit/Credit Card</label></div>
        
        <input
          type="radio"
          id="debit-credit-card"
          name="payment-method"
          value="debit-credit-card"
          checked={selectedMethod === 'debit-credit-card'}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
