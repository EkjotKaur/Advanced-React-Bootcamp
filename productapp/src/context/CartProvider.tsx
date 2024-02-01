import { ReactNode, createContext, useReducer } from "react";
import CartItem from "../model/CartItem";
import cartReducer from "../reducer/cartReducer";

type ContextType = {
    products: CartItem[],
    total: number,
    addToCart: (item: CartItem) => void,
    increment: (id: number) => void,
    checkout: () => void
}

export const CartContext = createContext<ContextType>({
    products: [],
    total: 0,
    addToCart: (item: CartItem) => { },
    increment: (id: number) => { },
    checkout: () => { }
});


type PropsType = {
    children: ReactNode
}
const initialState = {
    cartItems: [],
    total: 0
}

export default function CartProvider(props: PropsType) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(item: CartItem) {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }

    function increment(id: number) {

    }
    function checkout() {
        // axios.post...
        dispatch({ type: 'CLEAR_CART' })
    }
    return <CartContext.Provider value={{
        products: state.cartItems,
        addToCart,
        increment,
        checkout,
        total: state.total
    }}>
        {props.children}
    </CartContext.Provider>
}