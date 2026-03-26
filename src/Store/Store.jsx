import { configureStore } from "@reduxjs/toolkit";
import productModalReducer from "../Store/Slices/ProductModalSlice";

const store = configureStore({
    reducer:{
        productModal: productModalReducer,
    }
})

export default store;

