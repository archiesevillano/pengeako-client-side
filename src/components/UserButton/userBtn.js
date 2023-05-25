import "./userBtn.css";
import { useState, useEffect } from 'react';

const UserBtn = ({ iconName, count, action }) => {

    const [countVal, setCountValue] = useState(count === undefined ? "" : count);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        if (count <= 0) {
            setMarked(false);
        } else {
            setMarked(true);
            if (count > 99) {
                setCountValue("99+");
            }
            else {
                setCountValue(count);
            }
        }
    }, [count]);

    return (
        <button type="button" className="user-panel-btn" onClick={action === undefined ? null : action}>
            <span class="material-symbols-outlined">
                {iconName}
            </span>
            <span style={{ display: marked ? "inline-block" : "none" }} className="count">{countVal}</span>
        </button>
    );
}

export default UserBtn;