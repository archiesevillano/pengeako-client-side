import Axios from "axios";
import "./menudata.css";

const Drinks = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="drinks-list">

        </div>
    )
}

export default Drinks;