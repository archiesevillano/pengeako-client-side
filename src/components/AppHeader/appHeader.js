import Brand from "../Brand/brand";
import LogInSignUp from "../LogInSignUp/logInSignUp";
import TopNav from "../TopNav/topNav";
import "./appHeader.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserPanel from "./../UserPanel/userPanel";
import Backdrop from "../Backdrop/backdrop";
import FloatingNav from "../FloatingNav/floatingNav";

const AppHeader = () => {

    const navigate = useNavigate("/login");
    const [auth, setAuth] = useState(true);

    const loginform = () => {
        navigate(`/login`);
    }

    const [scrolled, setScrolled] = useState(false);

    const scrolledState = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolledState);
    }, []);


    return (
        <header className={scrolled ? "app-header scrolled" : "app-header"}>
            <div className="app-header-col">
                <Brand name="Pengeako" />
            </div>
            <TopNav links={["Menu", "Careers", "Contacts", "About"]} width="auto" />
            {auth === true ? <UserPanel /> : <LogInSignUp loginAction={loginform} signupAction={null} />}
        </header>
    );
}

export default AppHeader;