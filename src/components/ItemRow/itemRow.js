import "./itemRow.css";
import { useState, useEffect } from 'react';

const ItemRow = ({ orderData }) => {

    const [collectionItemCount, setCollectionItemCount] = useState("0 item");

    const getItemsCounts = () => {
        return orderData.items.length <= 1 ? `${orderData?.items?.length} item` : `${orderData?.items?.length} items`;
    }

    useEffect(() => {
        if (orderData?.items !== undefined) {
            setCollectionItemCount(getItemsCounts);
        }
    }, [orderData]);

    if (orderData === undefined) {
        return false;
    }
    else {
        return (
            <div className="item-row">
                <div className="header">
                    <h2 className="collection-item-count">
                        {collectionItemCount}
                        <span className="payment-method">Paid via {orderData?.paymentMethod}</span>
                    </h2>
                    <p className="collection-id">{orderData.id}</p>
                </div>
                <main>
                    {rows(orderData)}
                </main>
            </div >
        );
    }
}

export default ItemRow;

const rows = rowItems => {
    return rowItems.items.map((orderItem, index) => {
        return <div key={index + 1} className="row-collection-item">
            <div className="col">
                <img src={orderItem?.image} />
                <div className="item-names">
                    <p className="item-name">{orderItem?.name}</p>
                    <p className="item-category">Category:{orderItem?.category}</p>
                </div>
            </div>
            <p className="item-price">₱{orderItem?.price}</p>
            <p className="item-quantity">{orderItem?.quantity}</p>
            <p className="item-total">₱{orderItem?.total}</p>
        </div>
    })
}