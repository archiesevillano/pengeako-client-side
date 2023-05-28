import "./menuCard.css";

const MenuCard = ({ image, title, description, price }) => {
    return (
        <div className="menu-card">
            <span>₱{price}</span>
            <img className="product-image" src={image} />
            <div className="product-details">
                <p>{title}</p>
                <p>{description}</p>
                <div className="carticons-container">
                <div className="menucard-icons">
                        <button>
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div className="menucard-icons">
                        <button>
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MenuCard;