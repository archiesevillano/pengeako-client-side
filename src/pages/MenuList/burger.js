import "./menudata.css";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { app } from "../../configs/frb";
import React, { useState, useEffect } from 'react';
import MenuCard from '../../components/MenuCard/menuCard';

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
            console.error(error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="burger-list">
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

export default Burger;