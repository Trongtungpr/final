import { createSlice } from "@reduxjs/toolkit";


const USER_INFO_KEY = "USER_INFO";

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY)
  ? JSON.parse(localStorage.getItem(USER_INFO_KEY))
  : null;

const initialState = {
  cart: {
    data: userInfoFromStorage,
    loading: false,
    error: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartAction(state, action) {
      localStorage.removeItem(USER_INFO_KEY);
      state.cart= {
        ...state.cart,
        loading: true,
      };
    },
    getCartActionSuccess(state, action) {
      const data = action.payload;
      state.cart = {
        ...state.cart,
        loading: false,
        data: data,
      };
    },
  },
});

export const {
    getCartAction,
    getCartActionSuccess,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
