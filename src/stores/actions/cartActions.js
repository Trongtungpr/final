import {GET_PRODUCT_CART, GET_PRODUCT_CART_FAILURE, GET_PRODUCT_CART_SUCCESS } from "../constants/actionType";

export const getProducOfCartAction = (payload) => ({
    type: GET_PRODUCT_CART,
    payload,
});
export const getProducOfCartSuccessAction = (payload) => ({
    type: GET_PRODUCT_CART_SUCCESS,
    payload,
});

export const getProducOfCartFailureAction = (payload) => ({
    type: GET_PRODUCT_CART_FAILURE,
    payload,
});