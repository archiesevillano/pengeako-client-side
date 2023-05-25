import UserBtn from "../UserButton/userBtn";
import "./userPanel.css";


import "./userPanel.css";
const UserPanel = () => {

    return (
        <div className="user-panel-container">
            <div className="left">
                <UserBtn iconName={"shopping_cart"} count={797} />
                <UserBtn iconName={"chat_bubble"} count={797} />
                <UserBtn iconName={"notifications"} count={797} />
            </div>
            <div className="right">
                <a>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fuser_placeholder.png?alt=media&token=830ea0d8-bbf9-4a68-b552-a6f6e313e6b1"} />
                    <span>User123</span>
                </a>
            </div>
        </div>
    );
}


export default UserPanel;