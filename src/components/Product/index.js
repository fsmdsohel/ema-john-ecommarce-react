import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./product.css";

const Product = ({ product, handleAddToCart }) => {
    console.log(product);
    const { name, img, seller, price, stock } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>Price: {price}</p>
                <p>
                    <small>only {stock} left in stock - order soon</small>
                </p>
                <Rating
                    style={{ margin: "15px 0" }}
                    initialRating={product.star}
                    readonly
                    emptySymbol={
                        <FontAwesomeIcon
                            style={{ color: "#ddd" }}
                            icon={faStar}
                        ></FontAwesomeIcon>
                    }
                    fullSymbol={
                        <FontAwesomeIcon
                            style={{ color: "#fcb605" }}
                            icon={faStar}
                        ></FontAwesomeIcon>
                    }
                ></Rating>{" "}
                <br />
                <button
                    className="cart-btn"
                    onClick={() => handleAddToCart(product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
