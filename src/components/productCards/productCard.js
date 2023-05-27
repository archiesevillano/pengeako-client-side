import './productCard.css'

const ProductCard = ({ imageSrc, title, description, price }) => {


  return (
    <>
      <div className='cards-container'>
        <div className='products'>
          <img src={imageSrc} />
        </div>
        <div className='product-name'>
          <span className='title'>HotDogKo{title}</span>
          <span className='description'>Mesherep{description}</span>
        </div>
        <div className='product-price'>
          <span>₱{price}150</span>
        </div>
      </div>

    </>
  );
};


export default ProductCard;


