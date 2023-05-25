import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import { useState, useEffect } from 'react';
import AppHeader from "./components/AppHeader/appHeader";
import Home from "./pages/Home/home";
import "./App.css";
import Menu from "./pages/Menu/menu";
import Cart from "./pages/Cart/cart";

function App() {

  const [currentURL, setCurrentURL] = useState(window.location.href);

  useEffect(() => {
    const handleURLChange = () => {
      setCurrentURL(window.location.href);
    };

    // Attach an event listener to update the currentURL state when the URL changes
    window.addEventListener('popstate', handleURLChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleURLChange);
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="popLayout">
        {/*showLogin && <Login close={setShowLogin} >*/}
        <Router>
          <AppHeader />
          <div className="route-display">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path={`/login`} element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
