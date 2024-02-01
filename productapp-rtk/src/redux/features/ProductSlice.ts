import { createSlice } from "@reduxjs/toolkit";
import Product from "../../model/Product"
import { fetchProducts } from "../api/ProductApi";
import { stat } from "fs";

type ProductState = {
    status: "loading" | "idle",
    list: Product[],
    error: string | null
}
const initialState = {
    status: "idle",
    list: [],
    error: null
} as ProductState;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, { payload }) => {
            state.status = "loading";
            state.list = [];
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.status = "idle";
            state.list.push(...payload);
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected, (state, { payload }) => {
            state.status = "idle";
            state.list = [];
            state.error = "Boom :-("
        })
    }
});


export const productReducers = productSlice.reducer;