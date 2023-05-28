import "./screenLoader.css";

const ScreenLoader = ({ message }) => {
    return (
        <div className="loader-page">
            <div className="loader-object">
                <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
            </div>
            <span className="loader-message">{message}</span>
        </div>
    );
}

export default ScreenLoader;