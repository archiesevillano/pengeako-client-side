import "./signin.css";
import LineField from "../../components/LineField/lineField";
import Brand from "../../components/Brand/brand";

const SignIn = () => {
    return (
        <div className="signin">
            <div className="col1">
                <div className="brand-wrapper">
                    <Brand name="PENGEAKO" />
                </div>
                <p className="p1">
                    <h3>Join us today and unlock <br />a special offer just for you!</h3>
                    Sign up now and receive three complimentary shipping vouchers, available exclusively for new members. Don't miss out on this fantastic opportunity to experience hassle-free delivery with our delicious offerings.
                </p>
                <form className="signin-form" autoComplete="off">
                    <LineField placeholder={"Email Address"} label={"Email Address"} type={"text"} icon="fa-solid fa-user" id="new-email-input" />
                    <LineField placeholder={"Password"} label={"New Password"} type={"password"} icon="fa-solid fa-key" id="new-password-input" />
                    <LineField placeholder={"Password"} label={"Confirm Password"} type={"password"} icon="fa-solid fa-arrow-rotate-right" id="confirm-password-input" />
                    <div className="sign-up-btn-container">
                        <label>Sign up</label>
                        <button type="button" className="sign-up-btn">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="col2">
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F20.jpg?alt=media&token=45d25161-1250-4a8a-8a12-279c2c1d71ba"} className="showcase1" />
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F13.jpg?alt=media&token=63ef8956-22e8-4892-a570-f56c85a01c13"} className="showcase2" />
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F14.jpg?alt=media&token=c4cbbcd7-90f0-4e9e-aba1-ef7d7d662cc8"} className="showcase3" />
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F17.jpg?alt=media&token=d37b2938-be76-4d44-a226-b6c10b7b315e"} className="showcase4" />
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F11.jpg?alt=media&token=296488fd-b397-47fa-a688-2f82d0127ac7"} className="bgshowcase" />
            </div>
        </div>
    )
}

export default SignIn;