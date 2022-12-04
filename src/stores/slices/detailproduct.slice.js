import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  getDetailProductLoading: false,
  getDetailProductsError: null,
};

const detailProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getDetailProductsAction(state, action) {
      state.getDetailProductLoading = true;
    },
    getDetailProductsSuccess(state, action) {
      state.data = action.payload;
      state.getDetailProductLoading = false;
    },
    getDetailProductsFailed(state, action) {
      state.getDetailProductsError = action.payload;
      state.getDetailProductLoading = false;
    },
  },
});

export const { getDetailProductsAction, getDetailProductsSuccess, getDetailProductsFailed } = detailProductSlice.actions;
export const detailProductReducer = detailProductSlice.reducer;
