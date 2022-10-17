import { createSlice } from "@reduxjs/toolkit";
import {data} from "../data"

const initialState = {
    data : data
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{}
})

export default dataSlice.reducer;