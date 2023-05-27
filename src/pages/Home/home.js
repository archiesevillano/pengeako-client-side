import RoundedButton from "../../components/RoundedButton/roundedButton";
import SearchBar from "../../components/SearchBar/searchBar";
import ShowcaseCard from "../../components/ShowCaseCard/showcaseCard";
import PageFooter from "../../components/pageFooter/pageFooter";
import "./home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const homePage = document.querySelector(".homepage");

    const url = useLocation();
    const homeRef = useRef(null);

    const redirectToLogin = () => {
        alert("Hello");
    }

    const redirectToSignUp = () => {
        window.location.href = `${url}/signup`;
    }

    const [scrolled, setScrolled] = useState(false);

    const scrolledState = () => {
        console.log(homePage);
        if (window.scrollY >= 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }


    useEffect(() => {
        homeRef.current.addEventListener('scroll', scrolledState);
    }, []);


    const cards = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2Fburger%2F41.png?alt=media&token=c1704b9d-d65b-4c27-8395-98f9ab83d581",
            title: "Hamburger",
            description: "Delicious and Malicious homemade Beef Patty",
            price: 150,
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FFries%2Fpngwing(5).com.png?alt=media&token=ae2d4c93-0ca3-4063-bc8b-45dc3695ccd2",
            title: "Crispy Fries",
            description: "Fresh and Salty Creepy Crispy Potato Fries",
            price: 49,
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FPizza%2Fpngwing.com%20(5).png?alt=media&token=655a492c-a34f-4444-8008-92f0784494de",
            title: "Hamburger",
            description: "Delicious and Malicious homemade Beef Patty",
            price: 150,
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FIceCream%2F39.png?alt=media&token=131281c2-5bcc-430b-96c4-ba6545175737",
            title: "Sweet Ice Cream",
            description: "Soft and Creamy Ice Cream for everyone",
            price: 39,
        },

    ]

    return (
        <div className="homepage" ref={homeRef}>
            <div className="homepage-hero">
                <div className="left">
                    <p className="sub-caption">Quick Bites, Big Flavor: </p>
                    <h1 className="homepage-caption">
                        Fast food made just for you
                    </h1>
                    <div className="btn-col">
                        <RoundedButton value="Order now" width="140px" themeColor="tertiary" bold={true} capslock={true} roundness={"1"} />
                        <RoundedButton value="Best Selling" themeColor="secondary" width="140px" bold={true} capslock={true} roundness={"1"} />
                    </div>
                    <SearchBar placeholder={"Search for Foods"} id="landing-page-search-bar" />
                </div>
                <div className="right">
                    <div className="img-holder">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2Fburger%2F40.png?alt=media&token=f112588b-ae1b-47e8-ae11-83758b5ea3c3" className="showcase-product" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/logo.png?alt=media&token=70c25072-3774-4cb3-b5de-4796741a8358" className="img-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-cards">
                <div className="collection">
                    {cards.map((item, index) => <ShowcaseCard key={index + 1} imageSrc={item.image} title={item.title} description={item.description} price={item.price} />)}
                </div>

                <div className="subheadings">
                    <h1>Try it Today</h1>
                    <p>Satisfy your Cravings Today</p>
                </div>

                <div className="food-collage">
                    <div className="collage">
                        <div className="left">
                            <div className="collage-text-content">
                                <p>Try it Today</p>
                                <h2>Most Popular Pizza</h2>
                            </div>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fheart-pizza.jpg?alt=media&token=6daeb68e-66e0-4317-a681-6dcd89824dff"} />
                        </div>
                        <div className="right">
                            <div className="top-image">
                                <div className="collage-text-content">
                                    <p>Try it Today</p>
                                    <h2>Fresh And Chill</h2>
                                </div>
                                <img className="halo" src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2FHalo%20Halo.png?alt=media&token=c92a91f7-a6c3-44b2-ade4-c44d88cdd79f"} />
                            </div>
                            <div className="bottom-image">
                                <div className="collage-text-content">
                                    <p>Try it Today</p>
                                    <h2>Classic Meaty and Juicy</h2>
                                </div>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2Fburger%2Fpngwing.com%20(1).png?alt=media&token=6b1bb9ea-f810-4b67-8bd4-db2396a4f8f7"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="new-customer-section">
                    <div className="content">
                        <h2>Free Delivery</h2>
                        <h1>Get 3 Free Shipping Vouchers</h1>
                        <p className="p1">Register now to get yours</p>
                        <p className="p2">Available Nationwide from May 20 - June 10</p>
                        <RoundedButton value="Register Now" capslock={true} bold={true} roundness={"4"} themeColor={"secondary"} width={"150px"} />
                    </div>
                </div>

            </div>
            <PageFooter />
        </div>
    );
}

export default Home;