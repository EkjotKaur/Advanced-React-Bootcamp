import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./features/CartSlice";
import { userReducers } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducers } from "./features/ProductSlice";

const store = configureStore({
    // root reducer
    reducer: {
        cart: cartReducers,
        user: userReducers,
        products: productReducers
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;