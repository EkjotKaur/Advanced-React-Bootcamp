import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../../model/CartItem";

export interface CartState {
    cartItems: CartItem[],
    total: number,
    quantity: number
}
const initialState: CartState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            // state is a refernce of clone of redux store state given by immerJS
            state.cartItems.push({ ...action.payload });
            state.quantity++;
            state.total = state.total + action.payload.amount;
        },
        increment: (state, action: PayloadAction<number>) => {
            // find product by id
            // increment the quantity
            // compute total
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const cartReducers = cartSlice.reducer
export const { addToCart, increment, clearCart } = cartSlice.actions;