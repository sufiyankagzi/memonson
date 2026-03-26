import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  product: null,
};

const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.product = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.product = null;
    },
  },
});

export const { openModal, closeModal } = productModalSlice.actions;
export default productModalSlice.reducer;