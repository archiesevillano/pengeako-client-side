import './showcaseCard.css'

const ShowcaseCard = ({ imageSrc, title, description, price }) => {


  return (
    <>
      <div className='cards-container'>
        <div className='products'>
          <img src={imageSrc} />
        </div>
        <div className='product-name'>
          <span className='title'>{title}</span>
          <span className='description'>{description}</span>
        </div>
        <div className='product-price'>
          <span>₱{price}</span>
        </div>
      </div>

    </>
  );
};


export default ShowcaseCard;

