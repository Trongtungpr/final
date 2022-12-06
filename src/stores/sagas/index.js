import { all, fork } from "redux-saga/effects";
import { detailProductCartSaga } from "./cart.saga";
import { detailProductSaga } from "./detailproduct.saga";
import { productSaga } from "./product.saga";
import { registerSaga } from "./register.saga";
import { userSaga } from "./user.saga";

export function* mySaga() {
  yield all([fork(userSaga),fork(registerSaga),fork(productSaga),fork(detailProductSaga),fork(detailProductCartSaga)]);
}
