import "./pizzaPlate.css";
const PizzaPlate = ({ image, price }) => {
    return (
        <div className="pizza-plate">
            <span className="price">₱{price}</span>
            <img src={image} />
        </div>
    );
}

export default PizzaPlate;