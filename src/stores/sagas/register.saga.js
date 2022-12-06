import { put, takeLatest } from "redux-saga/effects";
import {
  registerAction,
  registerActionFailed,
  registerActionSuccess,
} from "../slices/register.slice.js";
import { AuthAPI } from "../../api";

function* register(action) {
  try {
    const registerPayload = action.payload;
    const response = yield AuthAPI.register({
      email: registerPayload.email,
      password: registerPayload.password,
      cart: registerPayload.cart,
      id: registerPayload.id,
      createdAt: registerPayload.createdAt,
      isStaff: registerPayload.isStaff,
      isAdmin: registerPayload.isAdmin,
    });

    yield put(registerActionSuccess(response.data.user));
  } catch (e) {
    console.log(e);
    yield put(registerActionFailed(e.response.data));
  }
}

export function* registerSaga() {
  // Use takelatest to avoid spam api request
  yield takeLatest(registerAction, register);
}
