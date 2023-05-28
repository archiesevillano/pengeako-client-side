import Brand from "../../components/Brand/brand";
import LineField from "../../components/LineField/lineField";
import AppButton from "../../components/AppButton/appButton";
import "./login.css";
import CloseButton from "../../components/CloseButton/closeButton";
import { motion } from "framer-motion";
import Backdrop from "../../components/Backdrop/backdrop";
import { auth, fb_provider, g_provider } from "./../../configs/frb";
import { signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthStatus, Authenticate } from "../../components/Context/Auth";
import { setCookie } from "../../AppCookies";
import { Navigate, useNavigate } from "react-router-dom";


const Login = ({ closeModal }) => {

    const navigate = useNavigate();
    const authentication = useContext(Authenticate); // gets the result of user authentication and assign it to auth context
    const authResult = useContext(AuthStatus); // gets the result of user authentication and assign it to auth context

    // sign in with google
    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, g_provider);
            const REF_TOKEN = result.user.refreshToken; // useful to re-authenticate the user
            console.log(result);
            setCookie("auth-token", REF_TOKEN);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignInWithFacebook = async () => {
        await signInWithPopup(auth, fb_provider);
    }

    useEffect(() => {
        if (authResult) {
            <Navigate to="/" />
        }
    }, [authResult]);


    //if user is previously login, then redirect the user to Home
    if (authResult) {
        console.log("logged in");
        return <Navigate to="/" />
    }

    //return this if the user is authenticated
    return (
        <Backdrop>
            <motion.div className="login-form" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} exit={{ opacity: 0, scale: 0 }}>
                <CloseButton top="-10px" right="-12px" action={closeModal} />
                <header>
                    <Brand name="Pengeako" />
                    <p>Unleash your taste buds' wildest desires</p>
                </header>
                <form className="login" method="POST" action="#" autoComplete="off" id="login">
                    <LineField label="Email" type="text" id={"email-field"} placeholder={"."} icon="fa-solid fa-user" />
                    <LineField label="Password" type="password" id={"password-field"} placeholder={"."} icon="fa-solid fa-key" />
                    <AppButton label="Login" icon="fa-solid fa-arrow-right-to-bracket" width="85%" />
                </form>
                <div className="or-container">
                    <span>or continue with</span>
                    <hr />
                </div>
                <div className="emailAuth">
                    <AppButton label="Google Account" icon="fa-brands fa-google" color="var(--text)" width="65%" clickAction={handleSignInWithGoogle} />
                    <AppButton label="Facebook Account" icon="fa-brands fa-square-facebook" color="var(--text)" width="65%" clickAction={handleSignInWithFacebook} />
                </div>
                <p className="footer"><a>Create an account</a> and delight in a plethora of promotions <br />and discounts exclusively offered by us.</p>
            </motion.div>
        </Backdrop>
    )
}

export default Login;