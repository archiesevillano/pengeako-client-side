import { NavLink } from "react-router-dom";
import "./topNav.css";

const TopNav = ({ links, width }) => {
    return (
        <nav className="top-navigation" style={{ width: width === null ? "100%" : width }}>
            <NavLink key={"home"} to={`/`} className={`top-nav-link home`}>
                <span>Home</span>
            </NavLink>
            {NavLinks(links)}
        </nav>
    );
}

const NavLinks = items => {
    return items.map(link => (
        <NavLink key={link} to={`/${link.toLowerCase()}`} className={`top-nav-link ${link.toLowerCase()}`}>
            <span>{link}</span>
        </NavLink>
    ));
}

export default TopNav;