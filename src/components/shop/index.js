import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart';
import Product from '../Product';
import './shop.css';


const Shop = () => {
    const [matchProduct, setMatchProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data=> {
            setProducts(data);
            setMatchProduct(data);
            }
        )
    },[])

    useEffect(()=>{
       if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
        }
        setCart(storedCart)
       }
    },[products]);

    const handleAddToCart = (products)=>{
        const newCart = [...cart,products];
        setCart(newCart);
        addToDb(products.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setMatchProduct(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="Search Product" />
                <input type="button" value="Search" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        matchProduct.map(products => <Product key={products.key} product={products} handleAddToCart={handleAddToCart} ></Product>)
                    }
                </div>
                <Cart cart={cart}></Cart>
            </div>
        </>
    );
};

export default Shop;
