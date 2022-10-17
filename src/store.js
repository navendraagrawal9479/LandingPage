import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./Slices/dataSlice"

export const store = configureStore({
    reducer:{
        data: dataSliceReducer
    }
})