import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./features/CartSlice";
import { userReducers } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducers } from "./features/ProductSlice";
import { customerApi } from "./api/customerApi";
import { postsApi } from "./api/postsApi";

const store = configureStore({
    // root reducer
    reducer: {
        cart: cartReducers,
        user: userReducers,
        products: productReducers,
        "customerApi": customerApi.reducer,
        "postsApi": postsApi.reducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(customerApi.middleware)
        .concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;