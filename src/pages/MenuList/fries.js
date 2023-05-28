import Axios from "axios";
import "./menudata.css";

const Fries = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="fries-list">

        </div>
    )
}

export default Fries;