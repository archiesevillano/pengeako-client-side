import "./appButton.css";

const AppButton = ({ bgColor, color, label, clickAction, isDisable, icon, width }) => {
    const style = {
        backgroundColor: bgColor,
        color,
        width: width,
    }

    return (
        <>
            <button type="button" style={style} className="app-button" disabled={isDisable} onClick={clickAction}>
                <i className={icon}></i>
                {label}
            </button>
        </>
    );
}

export default AppButton;