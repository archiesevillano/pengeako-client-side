import "./quantityField.css";
import { useState } from 'react';

const QuantityField = ({ qty }) => {

    const [count, setCount] = useState(qty === undefined ? 0 : qty);

    const handleIncrement = () => {
        setCount(c => c + 1);
    }

    const handleDecrement = () => {
        //limit value of 1: not allowed to decrease the value further
        setCount(c => c <= 1 ? 1 : c - 1);
    }

    return (
        <div className="quantity-field">

            <i className="fa-solid fa-square-plus" onClick={handleIncrement}></i>
            <span className="quantity-value">{count}</span>
            <i className="fa-solid fa-square-minus" onClick={handleDecrement}></i>

        </div>
    );
}

export default QuantityField;