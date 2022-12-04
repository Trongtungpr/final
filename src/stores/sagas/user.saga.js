import { put, takeEvery, delay } from "redux-saga/effects";
import {
  loginAction,
  loginActionFailed,
  loginActionSuccess,
} from "../slices/user.slice.js";
import { AuthAPI } from "../../api";

function* login(action) {
  try {
    const loginPayload = action.payload;
    yield delay(1000);
    const response = yield AuthAPI.login({
      email: loginPayload.email,
      password: loginPayload.password,
    });

    yield put(loginActionSuccess(response.data.user));
  } catch (e) {
    console.log(e);
    yield put(loginActionFailed(e.response.data));
  }
}

export function* userSaga() {
  yield takeEvery(loginAction, login);
}
