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
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </div>
            <div className="col3"></div>
        </section>
    );
}

export default Deliveries;