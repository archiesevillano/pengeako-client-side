import RoundedButton from "../RoundedButton/roundedButton";
import { Link } from 'react-router-dom';

const LogInSignUp = ({ loginAction, signupAction }) => {
    return (
        <div className="login-signup-btns">
            <Link to="/login">
                <RoundedButton value={"Log in"} capslock={true} themeColor={"primary"} noBackground={true} width="100px" size={"14px"} action={loginAction} />
            </Link>
            <RoundedButton value={"Sign up"} capslock={true} themeColor={"secondary"} width="100px" roundness={"4"} bold={true} size={"14px"} action={signupAction} />
        </div>
    );
}

export default LogInSignUp;