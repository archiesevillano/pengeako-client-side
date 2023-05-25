import "./topProductCard.css";

const TopProductCard = ({ image }) => {
    return (
        <div class="top-product-card">
            <img src={image} className="top-p-img" />
            <div class="card-content">
                <p class="card-title">Sample
                </p><p class="card-para">Try it now</p>
            </div>
        </div>

    );
}

export default TopProductCard;