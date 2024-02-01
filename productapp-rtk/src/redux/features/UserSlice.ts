import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../../model/CartItem";

export interface UserState {
  avatar: string;
  name:string
}
const initialState: UserState = {
    avatar: "",
    name: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<CartItem>) => {

        },
        logout: (state, action: PayloadAction<number>) => {

        }
    }
});

export const userReducers = userSlice.reducer
export const { login, logout } = userSlice.actions;