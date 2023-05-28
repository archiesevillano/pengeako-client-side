import Axios from "axios";
import "./menudata.css";

const Burger = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="burger-list">

        </div>
    )
}

export default Burger;