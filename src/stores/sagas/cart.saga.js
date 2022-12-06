import { put, takeEvery, delay } from "redux-saga/effects";
import { getProductOfCart } from "../../api/cart.api";
import { getProducOfCartFailureAction, getProducOfCartSuccessAction } from "../actions/cartActions";
import { GET_PRODUCT_CART } from "../constants/actionType";
import { getCartActionSuccess } from "../slices/cart.slice";

function* getDetailCart(action) {
  try {
    const response = yield getProductOfCart(action.id);
    
    console.log(response);

    yield put(getProducOfCartSuccessAction(response.data));
    console.log("response  cart success running");
  } catch (e) {
    yield put(getProducOfCartFailureAction(e));
  }
}

export function* detailProductCartSaga() {
  yield takeEvery(GET_PRODUCT_CART, getDetailCart);
}
