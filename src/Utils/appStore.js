import { configureStore } from "@reduxjs/toolkit";
import copyReducer from "./copySlice"

const appStore=configureStore({
    reducer:{
        copy:copyReducer,
    }
});
export default appStore;