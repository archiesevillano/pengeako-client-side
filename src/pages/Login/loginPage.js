import Brand from "../../components/Brand/brand";
import LineField from "../../components/LineField/lineField";
import AppButton from "../../components/AppButton/appButton";
import "./loginPage.css";
import CloseButton from "../../components/CloseButton/closeButton";
import { motion } from "framer-motion";
import Backdrop from "../../components/Backdrop/backdrop";
import { auth, fb_provider, g_provider } from "./../../configs/frb";
import { signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthStatus, Authenticate } from "../../components/Context/Auth";
import { setCookie } from "../../AppCookies";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ({ login }) => {

    const navigate = useNavigate();
    const authentication = useContext(Authenticate); // gets the result of user authentication and assign it to auth context
    const authResult = useContext(AuthStatus); // gets the result of user authentication and assign it to auth context

    // sign in with google
    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, g_provider);
            const REF_TOKEN = result.user.refreshToken; // useful to re-authenticate the user
            console.log(result);
            login(false);
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
            login(true);
            <Navigate to="/" />
        }
        else {
            login(false);
            <Navigate to="/login" />
        }
    }, [authResult]);


    //if user is previously login, then redirect the user to Home
    if (authResult) {
        return <Navigate to="/" />
    } else {
        return (
            <div className="login-page">
                <div className="content">
                    <div className="left">
                        <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/logo.png?alt=media&token=70c25072-3774-4cb3-b5de-4796741a8358"} />
                    </div>
                    <div className="right">
                        <h1>Login with</h1>
                        <div className="email-providers">
                            <AppButton clickAction={handleSignInWithGoogle} label={"Google Account"} icon={"fa-brands fa-google"} width={"300px"} color={"var(--text)"} />
                            <AppButton clickAction={handleSignInWithFacebook} label={"Yahoo Account"} icon={"fa-brands fa-yahoo"} width={"300px"} color={"var(--text)"} />
                            <AppButton label={"Twitter Account"} icon={"fa-brands fa-twitter"} width={"300px"} color={"var(--text)"} />
                            <AppButton label={"Microsoft Account"} icon={"fa-brands fa-microsoft"} width={"300px"} color={"var(--text)"} />
                            <AppButton label={"Facebook Account"} icon={"fa-brands fa-facebook"} width={"300px"} color={"var(--text)"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;