import React, { useState } from 'react';
import './gCash.css';

const Gcash = () => {
    
  return (
    <div className='gcash-container'>
        <div className='gcashinput-container'>
            <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/GCash_Logo_text.png?alt=media&token=e33c94c1-b697-413c-ab1c-af0547d229fe' alt='Gcash Logo'/>
        </div>
        <div className='qr-container'>
            <p>Scan to Pay HERE:</p>
            <div className='qrimg-container'>
                <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/GCash-QR.PNG.jpg?alt=media&token=672c0c31-768b-4243-b270-a1e0dee6fdd7' alt='QR Code'/>
            </div>
            
        </div>
      
    </div>
  );
};

export default Gcash;
