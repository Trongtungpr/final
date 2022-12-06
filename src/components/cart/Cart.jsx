import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const stateCart = useSelector((state) => state.cart);
  const [dataState, setDateState] = useState(stateCart);
  console.log("stateCart", dataState);
  return (
    <div className="cart">
      <div class="bg-light my-5">
        <h1>Shopping Cart</h1>
        <div class="shopping-cart">
          <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-removal">Remove</label>
            <label class="product-line-price">Total</label>
          </div>
          <CartItem
            CartItem={{
              name: "truong",
              img: "https://media.istockphoto.com/id/1184345169/photo/banana.jpg?s=612x612&w=0&k=20&c=NdHyi6Jd9y1855Q5mLO2tV_ZRnaJGtZGCSMMT7oxdF4=",
              price: "100",
            }}
          />
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
    </div>
  );
};
export default Cart;
