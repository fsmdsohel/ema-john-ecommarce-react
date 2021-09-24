import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Headers = () => {
    return (
        <div className="header">
            <div className="logo-div">
                <img className="logo" src={logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Headers;
