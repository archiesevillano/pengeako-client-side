import { useState, useEffect } from "react";
import "./roundedButton.css";
const RoundedButton = ({ id, roundness, type, themeColor, value, width, capslock, noBackground, bold, size, action }) => {

    const [bgColor, setBgColor] = useState(""); //holds the value of the buttons background color
    const [fontclr, setFontclr] = useState(""); //set the color for the font
    const [rad, setRad] = useState("");

    const getThemeColor = () => {
        switch (themeColor) {
            case "primary":
                setBgColor("var(--primary)");
                setFontclr("var(--text)");
                break;
            case "secondary":
                setBgColor("var(--secondary)");
                setFontclr("var(--text)");
                break;
            case "tertiary":
                setBgColor("var(--tertiary)");
                setFontclr("var(--text-invert)");
                break;
            case "quaternary":
                setBgColor("var(--quaternary)");
                setFontclr("var(--text)");
                break;
            case "quinary":
                setBgColor("var(--quinary)");
                setFontclr("var(--text)");
                break;
            case "last":
                setBgColor("var(--last)");
                setFontclr("var(--text)");
                break;

        }
    }

    const radius = () => {
        switch (roundness) {
            case "0":
                setRad("0px");
                break;
            case "1":
                setRad("3px");
                break;
            case "2":
                setRad("8px");
                break;
            case "3":
                setRad("15px");
                break;
            case "4":
                setRad("30px");
                break;
            case "5":
                setRad("50%");
                break;
        }
    }

    const style = {
        background: noBackground === true ? "none" : bgColor,
        color: fontclr,
        borderRadius: rad,
        width: width === null ? "auto" : width,
        fontWeight: bold === true ? "bold" : "",
        fontSize: size,
    }

    useEffect(() => {
        radius();
        getThemeColor();
    }, [themeColor, roundness]);

    return (
        <button className="rBtn" style={style} type={type === null ? "button" : type} id={id} onClick={action}><span>{capslock === true ? value.toUpperCase() : value}</span></button>
    );
}

export default RoundedButton;