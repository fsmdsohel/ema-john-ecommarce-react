import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let totalQuantity = 0;
    let total = 0;

    // const totalReducer = (previous, product) => {

    //     return  previous + product.price;
    // }
    // let total = cart.reduce(totalReducer, 0);

    for(const product of cart){
       product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = 15;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-container">
                <h2>Order summary</h2>
                <p><strong>Items  Orders:</strong> {totalQuantity}</p>
                <p><strong>total Price:</strong> {total}</p>
                <p><strong>Shipping:</strong> {shipping}</p>
                <p><strong>tax:</strong> {tax}</p>
                <p><strong>Grand Total:</strong> {grandTotal}</p>
        </div>
    );
};

export default Cart;
