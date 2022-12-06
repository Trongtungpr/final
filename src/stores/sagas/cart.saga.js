import { put, takeEvery, delay } from "redux-saga/effects";
import { getUserById } from "../../api/auth.api";
import { getProducOfCartFailureAction, getProducOfCartSuccessAction } from "../actions/cartActions";
import { GET_PRODUCT_CART } from "../constants/actionType";
import { getCartActionSuccess } from "../slices/cart.slice";

function* getDetailCart(action) {
  try {

    const response = yield getUserById(action.payload.id);

    if(response) yield put(getProducOfCartSuccessAction(response.data.cart));
    console.log("response  cart success running");
  } catch (e) {
    yield put(getProducOfCartFailureAction(e));
  }
}

export function* detailProductCartSaga() {
  yield takeEvery(GET_PRODUCT_CART, getDetailCart);
}
