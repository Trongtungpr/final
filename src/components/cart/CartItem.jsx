import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateItem } from "../../stores/slices/cartItem.slice";

import "./CartItem.scss";
const CartItem = (props) => {
    console.log(props);
    return (
        <>
            <div class="product">
                <div class="product-image">
                    <img src={props.CartItem.img} />
                </div>
                <div class="product-details">
                    <div class="product-title">{props.CartItem.name}</div>
                    <p class="product-description">
                       {props.CartItem.describe}
                    </p>
                </div>
                <div class="product-price">{props.CartItem.price}</div>
                <div class="product-quantity">
                    <input type="number" value="1" min="1"/>
                </div>
                <div class="product-removal">
                    <button class="remove-product">Remove</button>
                </div>
                <div class="product-line-price">45.99</div>
            </div>
        </>
    );
};
export default CartItem;
