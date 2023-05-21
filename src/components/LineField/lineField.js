import { isCompositeComponentWithType } from "react-dom/test-utils";
import "./lineField.css";
import { useState, useEffect } from "react";

const LineField = ({ label, placeholder, type, id, width, inputReceiver, icon }) => {

    const [eye, setEye] = useState(false);
    const [defaultType, setDefaultType] = useState("text");
    const [fieldType, setFieldType] = useState("text");
    const [hide, setHide] = useState(0);

    const icons = ["fa-solid fa-eye", "fa-solid fa-eye-slash"];

    const eyeIcon = <button type="button" className="show-hide-password-btn" onClick={() => {
        if (defaultType === "password") {
            if (fieldType === "password") {
                setFieldType("text");
                setHide(1);
            } else {
                setFieldType("password");
                setHide(0);
            }
        }
    }}>
        <i className={icons[hide]}></i>
    </button>;

    useEffect(() => {
        setDefaultType(type);
    }, [type]);

    useEffect(() => {
        if (defaultType === "password") {
            console.log(defaultType);
            setFieldType("password");
            setEye(true);
        }
        else {
            setFieldType("text");
        }
    }, [defaultType]);

    return (
        <div className="line-field" style={{ width, }}>
            <input className="input-line-field" type={fieldType} placeholder={placeholder} autoComplete="off" id={id} />
            <i id="icon" className={icon}></i>
            {eye && eyeIcon}
            <label className="field-label" htmlFor={id}>{label}</label>
            <div className="fieldLine">
                <div className="filling"></div>
            </div>
        </div>
    );
}

export default LineField;