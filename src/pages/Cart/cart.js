import React, { useState } from 'react';
import './cart.css';
import QuantityField from '../../components/QuantityField/quantityField';
import PaymentMethod from '../../components/PaymentMethod/paymentMethod';
import CheckOutModal from '../../components/CheckOut/checkOut';
import Backdrop from '../../components/Backdrop/backdrop';

const Cart = ({ totalItems }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePaymentMethod = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <div className="cart-page">
            <header className='cart-hero'>
                <div >

                </div>
            </header>
            <main>
                <h1>Your Cart ({totalItems === undefined ? 0 : totalItems} items)</h1>
                <div className="content">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartRow />
                            <CartRow />
                            <CartRow />
                            <CartRow />
                            <CartRow />
                            <CartRow />
                        </tbody>
                    </table>
                    <div className="order-comp">
                        
                        <div className="checkout-box">
                            <p>Click here to proceed to check out</p>
                            <hr />
                            <button className="place-order-btn" onClick={handleCheckout}>
                                Check out
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {showModal && (
                <Backdrop showBg={true} onClick={handleCloseModal}>
                    <CheckOutModal
                        closeModal={handleCloseModal}
                        
                        handlePaymentMethod={handlePaymentMethod}
                    />
                </Backdrop>
            )}
        </div>
    );
};

const CartRow = () => {
    return (
        <tr className="cart-row">
            <td>
                <img
                    className="item-image"
                    src="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2FMENU%2Fburger%2Fpngwing.com%20(4).png?alt=media&token=d78b6990-b75e-49e2-8ccc-5eb48b4eb1a6"
                    alt="Item"
                />
                <div className="item-text-details">
                    <span className="desc">Juicy Giant Burger w/ Beef Patty</span>
                    <p className="product-name">Giant Hamburger Patty</p>
                    <p className="cat">Category: Snacks</p>
                </div>
            </td>
            <td className="data-pricing">₱469.00</td>
            <td>
                <QuantityField />
            </td>
            <td>
                <span className="data-pricing">₱469.99</span>
                <i className="fa-solid fa-circle-xmark"></i>
            </td>
        </tr>
    );
};

export default Cart;
