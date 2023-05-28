import Axios from "axios";
import "./menudata.css";

const Pizza = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="pizza-list">

        </div>
    )
}

export default Pizza;