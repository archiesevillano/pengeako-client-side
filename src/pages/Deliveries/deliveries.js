import "./deliveries.css";

const Deliveries = () => {
    return (
        <section className="deliveries-section">
            <div className="col1">
                <span class="material-symbols-outlined">
                    check_circle
                </span>
                <p className="order-status">Order Completed</p>
                <p className="order-message">Thank you for joining us Today!</p>
                <button type="button" className="send-feedback">
                    Send us a Feedback
                </button>
            </div>
            <div className="col2">
                <h1>Delivery Information</h1>
                <div className="progress">
                    <div className="progress-value"></div>
                    <span className="preparing">Processing<br /><span className="time">01:05PM</span></span>
                    <span className="onTheWay">On The Way<br /><span className="time">01:30PM</span></span>
                    <span className="completed">Completed<br /><span className="time">02:05PM</span></span>
                </div>
            </div>
            <div className="col3">
                <div className="delivery-address-section">
                    <h2>
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                        Delivery Address
                    </h2>
                    <p>Juan Dela Cruz</p>
                    <p>(+63) 976 567 4567</p>
                    <p>Street 1 Zapote Mexico</p>
                    <p>Agusan Del Norte Cebu City</p>
                    <p>Metro Manila, 1745</p>
                </div>
                <div className="order-details">
                    <h2>Order Information</h2>
                    <div className="row order-id-container">
                        <p>Order ID</p>
                        <div className="order-id">
                            <span>2534535345435</span>
                            <button type="button" className="copy-id-btn">Copy</button>
                        </div>
                    </div>
                    <div className="row">
                        <p>Order Time</p>
                        <p>18-20-2023 18:11</p>
                    </div>
                    <div className="row">
                        <p>Payment Time</p>
                        <p>18-20-2023 18:11</p>
                    </div>
                    <div className="row">
                        <p>Delivery Time</p>
                        <p>18-20-2023 18:11</p>
                    </div>
                    <div className="row">
                        <p>Completed Time</p>
                        <p>18-20-2023 18:11</p>
                    </div>
                    <button type="button" className="complete-order-btn">Order Received</button>
                </div>
            </div>
        </section>
    );
}

export default Deliveries;