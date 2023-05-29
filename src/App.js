import { AnimatePresence } from "framer-motion";
import ReactDOM from 'react-dom';
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
import Auth from "./components/Context/Auth";
import Shopper from "./components/Context/Shopper";
import ContactPage from "./pages/ContactUs/contactUs";
import About from "./pages/About/about";
import CareerPage from "./pages/Career/careerPage";
import ScreenLoader from "./components/ScreenLoader/screenLoader";
import LoginPage from "./pages/Login/loginPage";
import Burger from "./pages/MenuList/burger";
import Drinks from "./pages/MenuList/drinks";
import IceCream from "./pages/MenuList/iceCream";
import Fries from "./pages/MenuList/fries";
import Pizzas from "./pages/MenuList/pizza";
import Dimsum from "./pages/MenuList/dimsum";



function App() {

  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [isAuth, setIsAuth] = useState(true);
  const [float, setFloat] = useState(false);
  const [isShowHeader, showHeader] = useState(false);

  useEffect(() => {
    const handleURLChange = () => {
      setCurrentURL(window.location.href);
    };

    if (currentURL.endsWith("/login")) {
      showHeader(false);
    }
    else {
      showHeader(true);
    }

    // Attach an event listener to update the currentURL state when the URL changes
    window.addEventListener('popstate', handleURLChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleURLChange);
    };
  }, []);

  return (
    <div className="App">
      <Auth>
        <Shopper>
          <AnimatePresence mode="popLayout">
            {/*showLogin && <Login close={setShowLogin} >*/}
            {float && <Backdrop showBg={true}><FloatingNav image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"} /></Backdrop>}
            <Router>
              {isShowHeader && <AppHeader />}
              <div className="route-display">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path={`/login`} element={<LoginPage login={showHeader} />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/menu" element={<Menu />}>
                    <Route exact path="burgers" element={<Burger />} />
                    <Route exact path="drinks" element={<Drinks />} />
                    <Route exact path="iceCreams" element={<IceCream />} />
                    <Route exact path="fries" element={<Fries />} />
                    <Route exact path="pizzas" element={<Pizzas />} />
                    <Route exact path="dimsum" element={<Dimsum />} />
                  </Route>
                  <Route exact path="/contacts" element={<ContactPage />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/careers" element={<CareerPage />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/profile" element={<Profile />}>
                    <Route exact path="deliveries" element={<Deliveries />} />
                    <Route exact path="purchases" element={<Purchases />} />
                    <Route exact path="manage-account" element={<ManageAccount />} />
                    <Route exact path="favorites" element={<Favorites />} />
                    <Route exact path="ratings" element={<Ratings />} />
                    <Route exact path="my-coupons" element={<Coupons />} />
                  </Route>
                </Routes>
              </div>
            </Router>
          </AnimatePresence>
        </Shopper>
      </Auth>
    </div>
  );
}

export default App;

