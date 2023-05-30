import ItemRow from "../../components/ItemRow/itemRow";
import "./purchases.css";

const Purchases = () => {
    return (
        <div className="purchase-history">
            <h1>Purchase history</h1>
            <div className="purchases">
                {purchasedItems.map((data, index) => <ItemRow key={index + 1} orderData={data} />)}
            </div>
        </div>
    );
}

const purchasedItems = [
    {
        id: "EF8WFW7F89AAWZZXA7S09AE78FGV",
        items: [
            {
                name: "Giant Meaty Burger",
                price: 149,
                quantity: 3,
                total: 598,
                image: "https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2Fburger%2Fpngwing.com%20(5).png?alt=media&token=788e335c-591f-4d65-b0fe-512f613ba5ea",
                category: "Meal",
            },
           
        ],
        dateCreated: "2023-01-31",
        paymentMethod: "COD",
    },
   
];

export default Purchases;