import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const USER_INFO_KEY = "USER_INFO";

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY)
  ? JSON.parse(localStorage.getItem(USER_INFO_KEY))
  : null;

const initialState = {
  userInfoState: {
    data: userInfoFromStorage,
    loading: false,
    error: "",
  },
};

const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerAction(state, action) {
      localStorage.removeItem(USER_INFO_KEY);
      state.userInfoState = {
        ...state.userInfoState,
        loading: true,
      };
    },
    registerActionSuccess(state, action) {
      const userInfoResponse = action.payload;
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse));
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        data: userInfoResponse,
        error: "",
      };
    },
    registerActionFailed(state, action) {
      notification.error({
        message: `Register Failed`,
      });

      localStorage.removeItem(USER_INFO_KEY);
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { registerAction, registerActionSuccess, registerActionFailed } =
  registerSlice.actions;
export const registerReducer = registerSlice.reducer;
