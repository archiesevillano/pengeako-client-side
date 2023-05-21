import Brand from "../../components/Brand/brand";
import LineField from "../../components/LineField/lineField";
import AppButton from "../../components/AppButton/appButton";
import "./login.css";
import CloseButton from "../../components/CloseButton/closeButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Redirect, useLocation } from "react-router-dom";


const Login = () => {

    //return this if the user is authenticated
    return (
        <motion.div className="overlay" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0, scale: 0 }}>
            <motion.div className="login-form" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} exit={{ opacity: 0, scale: 0 }}>
                <CloseButton top="-10px" right="-12px" />
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
                    <AppButton label="Google Account" icon="fa-brands fa-google" color="var(--text)" width="65%" />
                    <AppButton label="Facebook Account" icon="fa-brands fa-square-facebook" color="var(--text)" width="65%" />
                </div>
                <p className="footer"><a>Create an account</a> and delight in a plethora of promotions <br />and discounts exclusively offered by us.</p>
            </motion.div>
        </motion.div>

    )
}

export default Login;