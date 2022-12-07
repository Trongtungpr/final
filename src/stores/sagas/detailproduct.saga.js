import { put, takeEvery } from "redux-saga/effects";
import { ProductAPI } from "../../api/product.api";
import { getDetailProductsAction, getDetailProductsFailed, getDetailProductsSuccess } from "../slices/detailproduct.slice";

function* getDetailProducts(action) {
  try {
    const response = yield ProductAPI.getDetailProducts();
    
    console.log(response);

    yield put(getDetailProductsSuccess(response.data));
  } catch (e) {
    yield put(getDetailProductsFailed(e.response.data));
  }
}

export function* detailProductSaga() {
  yield takeEvery(getDetailProductsAction, getDetailProducts);
}
