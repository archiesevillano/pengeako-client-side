import Login from "../Login/login";
import "./profile.css";
import { NavLink, Outlet, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const navItems = [
    {
        label: "Deliveries",
        path: "deliveries",
    },
    {
        label: "My Purchases",
        path: "purchases",
    },
    {
        label: "Manage Account",
        path: "manage-account",
    },
    {
        label: "My Favorites",
        path: "favorites",
    },
    {
        label: "My Ratings",
        path: "ratings",
    },
    {
        label: "My Coupons",
        path: "my-coupons",
    },
];

const Profile = () => {

    const currentURL = useLocation();

    return (
        <div className="profile-page">
            <header>
                <div className="user-profile-image">
                    <img className="profile-image" src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"} />
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
            </header>
            <nav>
                <ul className="profile-nav">
                    {profileNavItems(navItems, currentURL.pathname)}
                </ul>
            </nav>
            <main>

                <Outlet />

            </main>
        </div>
    );
}


const profileNavItems = (items, url) => {
    return items.map((item, index) =>
        <li key={index + 1}>
            <NavLink to={`${item.path}`} className={({ isActive }) => isActive ? "active" : ""}>
                {item.label}
            </NavLink>
        </li >
    )
}

export default Profile;
