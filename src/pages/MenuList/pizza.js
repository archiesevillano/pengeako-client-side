import { app } from "../../configs/frb";
import { collection, getFirestore, addDoc, doc, getDoc, where, query, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import "./menudata.css";
import MenuCard from "../../components/MenuCard/menuCard";

const Pizzas = () => {

    const [list, setList] = useState([]);
    const db = getFirestore(app);

    const loadData = async () => {
        const resultList = [];

        try {
            const querySnapshot = await getDocs(collection(db, "pizzas"));

            querySnapshot.forEach((doc) => {
                const product = doc.data();
                product.productID = doc.id;
                resultList.push(product);
            });

            setList(resultList);
        } catch (error) {
            // Handle any error that occurred during data retrieval
            console.error(error);
        }

        console.log(resultList);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="pizza-list">
             {list.map((item) => (
                <MenuCard
                    id={item.productID}
                    image={item.image}
                    title={item.productName}
                    description={item.description}
                    price={item.productPrice}
                    category={item.category}
                />
            ))}
        </div>
    )
}

export default Pizzas;