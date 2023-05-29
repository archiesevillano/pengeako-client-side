import React, { useState, useEffect } from 'react';
import { collection, getFirestore, addDoc, doc, getDoc, where, query, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import "./menudata.css";
import { app } from "../../configs/frb";
import MenuCard from "../../components/MenuCard/menuCard";

const Fries = () => {

    const [list, setList] = useState([]);
    const db = getFirestore(app);

    const loadData = async () => {
        const resultList = [];

        try {
            const querySnapshot = await getDocs(collection(db, "fries"));

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
        <div className="fries-list">
            {list.map((item, index) => (
                <MenuCard
                key={index + 1}
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

export default Fries;