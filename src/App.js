import { useState } from 'react';
import './App.css';
import Login from './pages/Login/login';
import { AnimatePresence } from "framer-motion";
import SignIn from './pages/Signin/signin';

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="popLayout">
        {/*showLogin && <Login close={setShowLogin} >*/}
      </AnimatePresence>
      <SignIn />
    </div>
  );
}

export default App;
