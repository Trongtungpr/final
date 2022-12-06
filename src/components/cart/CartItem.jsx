import React, { useCallback, useEffect, useState } from "react";
import { getProduct } from "../../api/product.api";
// import { useDispatch } from "react-redux";
// import { updateItem } from "../../stores/slices/cartItem.slice";

import "./CartItem.scss";
const CartItem = (props) => {
    console.log("props cart item",props.CartItem);
    const [stateData,setItemData] = useState(false)
    const [stateQuantity,setQuantity] = useState(props.CartItem.quantity)
    const FetProduct = useCallback((id) => {
        getProduct(id).then((res) => setItemData(res));
    }, []);
    useEffect(()=>{
        FetProduct(props.CartItem.id)
    },[])
    const quantityUp = () => {
        setQuantity(stateQuantity+1)
    }
    const quantityDown = () => {
        if(stateQuantity > 1)
       {
        setQuantity(stateQuantity-1)
       }
    }
    return (
        <>
            {stateData != false &&(<div class="product">
                <div class="product-image">
                    <img src={stateData.data.img} alt="" />
                </div>
                <div class="product-details">
                    <div class="product-title">{stateData.data.name}</div>
                    <p class="product-description">
                    {stateData.data.category}
                    </p>
                </div>
                <div class="product-price">{stateData.data.price}</div>
                <div class="product-quantity d-flex">
                    <h3 class="quantity-handle" id="quantity-down" onClick={quantityDown}>-</h3>
                    <div class="input-quantity">
                        <h4 id="current-quantity">{stateQuantity}</h4>
                    </div>
                    <h3 class="quantity-handle" id="quantity-up" onClick={quantityUp}>+</h3>
                </div>
                <div class="product-removal">
                    <button class="remove-product">Remove</button>
                </div>
                <div class="product-line-price" id={"product-line-price"+props.CartItem.id}>{parseFloat(stateData.data.price)*stateQuantity}</div>
            </div>)}
        </>
    );
};
export default CartItem;
