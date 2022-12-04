import {
  GET_VIEW_DETAIL_PRODUCT,
  GET_VIEW_DETAIL_PRODUCT_FAILURE,
  GET_VIEW_DETAIL_PRODUCT_SUCCESS,
} from "../constants/actionType";

export const getDetailProductAction = (payload) => ({
  type: GET_VIEW_DETAIL_PRODUCT,
  payload,
});
export const getDetailProductSuccessAction = (payload) => ({
  type: GET_VIEW_DETAIL_PRODUCT_SUCCESS,
  payload,
});
export const getDetailProductFalureAction = (payload) => ({
  type: GET_VIEW_DETAIL_PRODUCT_FAILURE,
  payload,
});
