import "./topProductCard.css";

const TopProductCard = ({ image, title, cardpara }) => {
    return (
        <div class="top-product-card">
            <img src={image} className="top-p-img" />
            <div class="card-content">
                <p class="card-title">{title}
                </p><p class="card-para">{cardpara}</p>
            </div>
        </div>

    );
}

export default TopProductCard;