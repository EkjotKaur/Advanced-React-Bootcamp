import CartItem from "../model/CartItem"

type ActionType = {
    type: 'ADD_TO_CART',
    payload: CartItem
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

type StateType = {
    cartItems: CartItem[],
    total: number
}

export default function cartReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount
            }
        case 'INCREMENT': return state;
        case 'CLEAR_CART': return { cartItems: [], total: 0 }
        default: return state;
    }
}
