import { types, SnapshotIn } from "mobx-state-tree";

export const CartItem = types.model({
    id: types.number,
    title: types.string,
    price: types.number,
    description: types.string,
    image: types.string,
    amount: types.number,
    quantity: types.number
}).actions(self => ({
    increment() {

    }
}));

export const Cart = types.model({
    items: types.optional(types.array(CartItem), []),
    quantity: types.number
}).actions(self => ({
    addToCart(item: SnapshotIn<typeof CartItem>) {
        self.items.push(item);
        self.quantity++
    },
    increment(item: SnapshotIn<typeof CartItem>) {

    }
}))
    .views(self => ({
        get total() {
            return self.items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
        }
    }));