import React, {useState} from "react";
import './emailSubscriptions.css';
import TextField from "../TextField/textField";

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
            <button type="submit"><i className="fa-solid fa-paper-plane"></i> Subscribe Now</button>
          </form>
        </div>
      );
    }


export default EmailSubscriptions