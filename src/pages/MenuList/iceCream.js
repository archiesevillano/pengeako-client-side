import Axios from "axios";
import "./menudata.css";

const IceCream = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="iceCream-list">

        </div>
    )
}

export default IceCream;