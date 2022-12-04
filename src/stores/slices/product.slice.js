import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  getProductLoading: false,
  getProductsError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsAction(state, action) {
      state.getProductLoading = true;
    },
    getProductsSuccess(state, action) {
      state.data = action.payload;
      state.getProductLoading = false;
    },
    getProductsFailed(state, action) {
      state.getProductsError = action.payload;
      state.getProductLoading = false;
    },
  },
});

export const { getProductsAction, getProductsSuccess, getProductsFailed } = productSlice.actions;
export const productReducer = productSlice.reducer;
