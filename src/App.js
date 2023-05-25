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
import Backdrop from "./components/Backdrop/backdrop";
import FloatingNav from "./components/FloatingNav/floatingNav";
import Profile from "./pages/Profile/profile";
import Deliveries from "./pages/Deliveries/deliveries";
import Purchases from "./pages/Purchases/purchases";
import Coupons from "./pages/Coupons/coupons";
import Favorites from "./pages/My Favorites/favorites";
import ManageAccount from "./pages/Manage Account/manageAccount";
import Ratings from "./pages/Ratings/ratings";
import Coins from "./pages/Coins/coins";



function App() {

  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [auth, setAuth] = useState(true);
  const [float, setFloat] = useState(false);

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
        {float && <Backdrop showBg={true}><FloatingNav image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"} /></Backdrop>}
        <Router>
          <AppHeader />
          <div className="route-display">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path={`/login`} element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/profile" element={<Profile />}>
                <Route exact path="deliveries" element={<Deliveries />} />
                <Route exact path="purchases" element={<Purchases />} />
                <Route exact path="manage-account" element={<ManageAccount />} />
                <Route exact path="coins" element={<Coins />} />
                <Route exact path="favorites" element={<Favorites />} />
                <Route exact path="ratings" element={<Ratings />} />
                <Route exact path="my-coupons" element={<Coupons />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
