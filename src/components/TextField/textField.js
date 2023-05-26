import { useEffect, useState } from "react";
import "./textField.css";
const TextField = ({ placeHolder, width, id, action, type }) => {

    const handleInputs = e => {
        const value = e.target.value;
        action(value);
    }

    return (
        <div className="text-field" style={{ width: width === undefined ? "auto" : width }}>
            <input autocomplete="off" id={id} type={type === undefined ? "text" : type} placeholder={placeHolder} onChange={handleInputs} />
        </div>
    );
}

export default TextField;