import "./menuCard.css";

const MenuCard = ({ image, title, description, price }) => {
    return (
        <div className="menu-card">
            <span>₱{price}</span>
            <img className="product-image" src={image} />
            <div className="product-details">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default MenuCard;