import React, { useState } from 'react';
import './gCash.css';

const Gcash = () => {
    const [gcashNumber, setGcashNumber] = useState('');
  
    const handleGcashNumberChange = (e) => {
      const formattedNumber = formatPhoneNumber(e.target.value);
      setGcashNumber(formattedNumber);
    };
  
    const formatPhoneNumber = (number) => {
      // Remove all non-digt characters from the input
      const cleanedNumber = number.replace(/\D/g, '');
  
      // Truncate the number if it exceeds the required length
      const maxLength = 13; // "+63 xxx xxxx xxx" has 13 characters
      const truncatedNumber = cleanedNumber.slice(0, maxLength);
  
      // Format the number as "+63 xxx xxxx xxx"
      const formattedNumber = truncatedNumber.replace(/(\d{2})(\d{3})(\d{4})(\d+)/, '+63 $2 $3 $4');
  
      return formattedNumber;
    };

  return (
    <div className='gcash-container'>
        <div className='gcashinput-container'>
            <label htmlFor="gcashNumber">GCash Number:</label>
            <input
        type="text"
        id="gcashNumber"
        name="gcashNumber"
        value={gcashNumber}
        onChange={handleGcashNumberChange}
        placeholder="09 xxx xxx xxx"
        required
      />
        </div>
        <div className='qr-container'>
            <p>Scan to Pay:</p>
            <div className='qrimg-container'>
                <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/GCash-QR.PNG.jpg?alt=media&token=672c0c31-768b-4243-b270-a1e0dee6fdd7' alt='QR Code'/>
            </div>
            
        </div>
      
    </div>
  );
};

export default Gcash;
