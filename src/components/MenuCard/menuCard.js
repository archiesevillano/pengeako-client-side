import { ModifyCart, UserCart, UserFavorites } from "../Context/Shopper";
import "./menuCard.css";
import { useState, useContext } from 'react';
import { idgen } from "../../AppProperties";

const MenuCard = ({ id, image, title, description, price, category }) => {

    const cart = useContext(UserCart);
    const setCart = useContext(ModifyCart);
    const favs = useContext(UserFavorites);


    const item = {
        productID: id,
        productName: title,
        description: description,
        price: price,
        quantity: 1,
    }

    const handleUpdate = () => {

    }

    const handleRemove = () => {

    }

    const handleAdd = () => {
        cart.forEach(cartItem => {
            if (cartItem.productID === id) {
                cartItem.quantity++;
            }
            else {
                cart.push(item);
            }
        })
    }

    const handleAddFavorites = () => {
        cart.forEach(cartItem => {
            if (cartItem.productID !== id) {
                favs.push(item);
            }
        })
    }


    return (
        <div className="menu-card">
            <span>₱{price}</span>
            <img className="product-image" src={image} />
            <div className="product-details">
                <p>{title}</p>
                <p>{description}</p>
                <div className="carticons-container">
                    <div className="menucard-icons">
                        <button>
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div className="menucard-icons">
                        <button>
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MenuCard;