import React from 'react';

const CardIcon = ({ cardType }) => {
  const cardIcons = [
    {
      type: 'visa',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FVisa.png?alt=media&token=114997f3-ad13-47d3-a61f-b54178e8a71a'
    },
    {
      type: 'mastercard',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMasterCard.png?alt=media&token=d5e0fb87-dda0-45ea-815a-3e214486fc8b'
    },
    
  ];

  const selectedIcon = cardIcons.find(icon => icon.type === cardType);

  return (
    <div>
      {selectedIcon && <img src={selectedIcon.imageUrl} alt={cardType} />}
    </div>
  );
};

export default CardIcon;
