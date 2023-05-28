import React, {useState} from "react";
import './emailSubscriptions.css';
import TextField from "../TextField/textField";
import Appbutton from '../AppButton/appButton';

const EmailSubscriptions = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // API natin for email subscriptions mga pre

        console.log('Email Submitted:', email);
        setEmail('');
    };
    return (
        <div className="emailsubscriptions-container">
          <form onSubmit={handleSubmit}>
            <TextField 
              type="email"
              placeHolder={"Enter your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           <Appbutton type="submit" label="Subscribe Now" icon="fa-solid fa-paper-plane" />
          </form>
        </div>
      );
    }


export default EmailSubscriptions