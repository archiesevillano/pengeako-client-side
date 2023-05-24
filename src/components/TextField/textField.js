import "./textField.css";
const TextField = ({ placeHolder, width }) => {
    return (
        <div className="text-field">
            <input type="text" placeholder={placeHolder} style={{ width: width === null ? "auto" : width }} />
        </div>
    );
}

export default TextField;