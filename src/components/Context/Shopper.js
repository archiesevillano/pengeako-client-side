import Axios from 'axios';
import React from 'react';
import { IDGenerator as uuidv4 } from "./../../AppProperties";
import { idgen, tStamp } from './../../AppProperties';
import { useState } from 'react';

export const UserCart = React.createContext();
export const ModifyCart = React.createContext();
export const CartInfo = React.createContext();

const Shopper = ({ children }) => {

    //saves the cart values inside the database
    const SaveCart = () => {

    }

    const config = {
        id: idgen(),
        timestamp: tStamp(),
    }

    // set or modifies the cart values
    // holds all the items/products that the user added in the cart
    const [cart, setCart] = useState([]);

    return (
        <CartInfo.Provider value={config}>
            <UserCart.Provider value={cart}>
                <ModifyCart.Provider value={setCart}>
                    {children}
                </ModifyCart.Provider>
            </UserCart.Provider>
        </CartInfo.Provider>
    );
}

// Cart Functions
export const EmptyCart = () => {

}

export const RemoveCartItem = id => {

}

export const LoadCart = async cartID => {
    try {
        const response = await Axios.post("",)
    } catch (error) {

    }
}


export default Shopper;