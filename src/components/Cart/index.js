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
                <h3>Order summary</h3>
                <h5>Items  Orders: {totalQuantity}</h5>
                <p>total Price: {total}</p>
                <p>Shipping: {shipping}</p>
                <p>tax: {tax}</p>
                <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;
