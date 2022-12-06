import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../api/product.api";
import { getProducOfCartAction } from "../../stores/actions/cartActions";
import CartItem from "./CartItem";


const Cart = (props) => {

    return (
        <div class="bg-light my-5">
            <h1>Shopping Cart</h1>
            <button>dd</button>
            <div class="shopping-cart">
                <div class="column-labels">
                    <label class="product-image">Image</label>
                    <label class="product-details">Product</label>
                    <label class="product-price">Price</label>
                    <label class="product-quantity">Quantity</label>
                    <label class="product-removal">Remove</label>
                    <label class="product-line-price">Total</label>
                </div>
                {props.data.map((item)=>(
                    <div class="my-2">
                        <CartItem CartItem={item}></CartItem>
                    </div>
                ))}

            </div>
            <div class="totals">
                <div class="totals-item">
                    <label>Subtotal</label>
                    <div class="totals-value" id="cart-subtotal">
                        71.97
                    </div>
                </div>
                <div class="totals-item">
                    <label>Tax (5%)</label>
                    <div class="totals-value" id="cart-tax">
                        3.60
                    </div>
                </div>
                <div class="totals-item">
                    <label>Shipping</label>
                    <div class="totals-value" id="cart-shipping">
                        15.00
                    </div>
                </div>
                <div class="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div class="totals-value" id="cart-total">
                        90.57
                    </div>
                </div>
            </div>

            <button class="checkout">Checkout</button>
        </div>
    )
}
export default Cart;