import "./menudata.css";
import { collection, getFirestore, addDoc, doc, getDoc, where, query, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { app } from "../../configs/frb";
import React, { useState, useEffect } from 'react';

const Burger = () => {

    const [list, setList] = useState([]);
    const db = getFirestore(app);

    const loadData = async () => {
        const resultList = [];

        try {
            const querySnapshot = await getDocs(collection(db, "burgers"));

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
        <div className="burger-list">

        </div>
    )
}

export default Burger;