import TopProductCard from "../../components/TopProductCard/topProductCard";
import PageFooter from "../../components/pageFooter/pageFooter";
import "./menu.css";
import { useState, useRef } from 'react';
import TicketLabel from "../../components/TicketLabel/ticketLabel";
import PizzaPlate from "../../components/PizzaPlate/pizzaPlate";
import { NavLink, Outlet } from 'react-router-dom';
import MenuCard from "../../components/MenuCard/menuCard";

const Menu = () => {
    return (
        <div className="page-menu">
            <div className="menu-hero">
                <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FUntitled-1.png?alt=media&token=4a90ca1c-025d-4d9c-9511-965b22723b1d"} />
                <div className="hero-content">
                    <TicketLabel label="Special Offer" />
                    <h1>Get 10% to our Pizzas</h1>
                    <p>Valid from May 29 - June 10</p>
                    <div className="pizza-lists">
                        <PizzaPlate price="599.00" image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FYummyTommyFour.png?alt=media&token=e1753efc-7546-4c00-a2d9-ed1f8e717ea5"} />
                        <PizzaPlate price="669.00" image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FYummyTommyOne.png?alt=media&token=e6afb9f8-1ea0-4f5a-acaf-f2e8791d5d37"} />
                        <PizzaPlate price="449.00" image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FYummyTommyThree.png?alt=media&token=c97319c0-0c2b-4f44-96af-dbbde4ad6d91"} />
                        <PizzaPlate price="399.00" image={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2FYummyTommyTow.png?alt=media&token=848d8b94-379d-45d0-8375-efcb775f9df1"} />
                    </div>
                </div>
            </div>
            <div className="top-products-section">
                <TopProductCard image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2F1074058.jpg?alt=media&token=fa67d0a8-8973-455b-b4cd-becf313109e9" 
                title={'50% Off for Pizza'}
                cardpara={'WEEKENDS OFFER ONLY'}/>
                <TopProductCard image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2F1.jpg?alt=media&token=40f350c3-dea9-4c67-86ab-e3c9462c1679" 
                
                title={"Here's the Scoop!"}
                cardpara={'Ice Cream Special'}/>
                <TopProductCard image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2Fw.jpg?alt=media&token=6b5920fa-b6fc-4cc1-95bd-766b20573360" 
                title={"Burger Day!"}
                cardpara={'Free CurlyFries every Fridays'}/>
            </div>

            <div className="menu-list">
                <header className="menu-header">
                    <div className="text-content">
                        <h1>Our Menu</h1>
                        <p>Choose and Never hold back</p>
                    </div>
                    <ul className="categories-section">
                        {getCategories()}
                    </ul>
                </header>
                <main className="product-list">
                    <div className="wrapper">
                        <Outlet />
                    </div>
                </main>
            </div>
            <PageFooter />
        </div>
    );
}

const getCategories = () => {

    const categories = [
        {
            name: "Burger",
            path: "burgers",
        },
        {
            name: "Pizza",
            path: "pizzas",
        },
        {
            name: "Drinks",
            path: "drinks",
        },
        {
            name: "Ice Creams",
            path: "iceCreams",
        },
        {
            name: "Fries",
            path: "fries",
        },
        {
            name: "Dimsum",
            path: "dimsum",
        },
    ]

    return categories.map((category, index) => <li key={index + 1}><NavLink className={category.path.toString().toLocaleLowerCase()} to={`${category.path}`}>{category.name}</NavLink></li>);
}

export default Menu;