import "./floatingNav.css";
const FloatingNav = ({ image }) => {
    return (
        <nav className="floating-nav">
            <div className="upper-content">
                <div className="profile-section">
                    <div className="top">
                        <div className="user-image">
                            <img src={image} />
                            <button type="button" className="update-image-btn">
                                <span class="material-symbols-outlined">
                                    add_a_photo
                                </span>
                            </button>
                        </div>
                        <div className="user-names">
                            <p>User 123</p>
                            <span>user123@gmail.com</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <button type="button" className="account-settings-btn">
                            Manage Account
                        </button>
                    </div>
                </div>
                <hr />
                <div className="major-navs">
                    <button type="button">
                        <span class="material-symbols-outlined">
                            local_shipping
                        </span>
                        Deliveries
                    </button>
                    <button type="button">
                        <span class="material-symbols-outlined">
                            receipt_long
                        </span>
                        My Purchases
                    </button>
                    <button type="button">
                        <span class="material-symbols-outlined">
                            monetization_on
                        </span>
                        My Coins
                    </button>
                </div>
            </div>
            <ul className="floating-links">
                <li>
                    <a>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                        My Favorites
                    </a>
                </li>
                <li>
                    <a>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                        My Ratings
                    </a>
                </li>
                <li>
                    <a>
                        <span class="material-symbols-outlined">
                            loyalty
                        </span>
                        My Coupons
                    </a>
                </li>
            </ul>
            <button className="logout-btn">
                <span class="material-symbols-outlined">
                    logout
                </span>
                Log Out
            </button>
        </nav>
    );
}

export default FloatingNav;