import "./socialLinks.css";
import { Link } from "react-router-dom";

const appSocial = [
    {
        icon: <i className="fa-brands fa-facebook-f"></i>,
        path: "https://www.facebook.com/",
    },
    {
        icon: <i className="fa-brands fa-twitter"></i>,
        path: "https://twitter.com/",
    },
    {
        icon: <i className="fa-brands fa-linkedin-in"></i>,
        path: "https://www.linkedin.com/",
    },
    {
        icon: <i className="fa-brands fa-instagram"></i>,
        path: "https://www.instagram.com/",
    }
];


const SocialLinks = () => {
    return (
        <ul className="social-links">
            {Links()}
        </ul>
    );
}

const Links = () => {
    return (
        appSocial.map((item, index) =>
            <li key={index + 1}>
                <Link to={item.path}>
                    {item.icon}
                </Link>
            </li>
        )
    )
};

export default SocialLinks;