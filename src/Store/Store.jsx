import { configureStore } from "@reduxjs/toolkit";
import productModalReducer from "../Store/Slices/ProductModalSlice";
import toastReducers from '../Store/Slices/toast_slice'
import authReducers from '../Store/Slices/auth_slice'
const store = configureStore({
    reducer:{
        productModal: productModalReducer,
        toast :toastReducers,
        auth:authReducers,
    }
})

export default store;

