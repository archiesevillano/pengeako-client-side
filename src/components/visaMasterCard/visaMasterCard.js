import React from 'react';

const CardIcon = ({ cardType }) => {
  const getCardIconUrl = () => {
    if (cardType === 'visa') {
      return 'https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FVisa.png?alt=media&token=114997f3-ad13-47d3-a61f-b54178e8a71a';
    } else if (cardType === 'mastercard') {
      return 'https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMasterCard.png?alt=media&token=d5e0fb87-dda0-45ea-815a-3e214486fc8b';
    }
    // Return a default icon URL or an empty string if no card type is detected
    return '';
  };

  const iconUrl = getCardIconUrl();

  return (
    <div className="card-icon">{iconUrl && <img src={iconUrl} alt={cardType} />}</div>
  );
};

export default CardIcon;
