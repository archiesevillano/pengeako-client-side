import "./closeButton.css";
const CloseButton = ({ top, right, action }) => {
    return (
        <button type="button" className="x-btn" style={{ top, right }} onClick={action}>
            <i className="fa-solid fa-circle-xmark"></i>
        </button>
    );
}

export default CloseButton;