import Axios from "axios";
import "./menudata.css";

const Dimsum = () => {

    const [list, setList] = useState([]);

    useEffect(async () => {
        const response = await Axios.get();

        setList(response.data);
    }, []);


    return (
        <div className="dimsum-list">

        </div>
    )
}

export default Dimsum;