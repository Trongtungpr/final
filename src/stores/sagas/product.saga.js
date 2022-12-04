import { put, takeEvery, delay } from "redux-saga/effects";
import { ProductAPI } from "../../api/product.api";
import { GET_VIEW_DETAIL_PRODUCT } from "../constants/actionType";
import { getDetailProductsFailed, getDetailProductsSuccess } from "../slices/detailproduct.slice";
import {
  getProductsAction,
  getProductsFailed,
  getProductsSuccess,
} from "../slices/product.slice";

function* getProducts(action) {
  try {
    const response = yield ProductAPI.getProducts();
    
    console.log(response);

    yield put(getProductsSuccess(response.data));
  } catch (e) {
    yield put(getProductsFailed(e.response.data));
  }
}
function* getDetailProducts(action) {
  try {
    const response = yield ProductAPI.getProducts();
    
    console.log(response);

    yield put(getDetailProductsSuccess(response.data));
  } catch (e) {
    yield put(getDetailProductsFailed(e.response.data));
  }
}
export function* productSaga() {
  yield takeEvery(getProductsAction, getProducts);
  yield takeEvery(GET_VIEW_DETAIL_PRODUCT, getDetailProducts)
}
