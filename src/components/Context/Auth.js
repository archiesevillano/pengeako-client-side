import React, { useState } from 'react';
import { getCookie } from '../../AppCookies';

export const AuthStatus = React.createContext();
export const Authenticate = React.createContext();

const Auth = ({ children }) => {

    const [authenticated, setAuth] = useState(getCookie("auth-token"));

    return (
        <AuthStatus.Provider value={authenticated}>
            <Authenticate.Provider value={setAuth}>
                {children}
            </Authenticate.Provider>
        </AuthStatus.Provider>
    )
}

export default Auth;