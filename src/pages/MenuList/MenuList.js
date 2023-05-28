import "./menuList.css";
import { useLocation } from 'react-router-dom';

const MenuList = () => {

    const url = useLocation();

    switch (url.pathname) {
        case url.pathname.endsWith("burger"):
            break;
        case url.pathname.endsWith("pizza"):
            break;
        case url.pathname.endsWith("dimsum"):
            break;
        case url.pathname.endsWith("drinks"):
            break;
        case url.pathname.endsWith("iceCream"):
            break;
        case url.pathname.endsWith("fries"):
            break;
    }

    const handleShowList = category => {
        const response = Axios.get("host", { listCategory: category });
        return
    }

    return (
        <section className="menu-list">

        </section>
    )
}

export default MenuList;