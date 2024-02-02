import { Instance, onSnapshot, types } from "mobx-state-tree";
import { Cart } from "./Cart";
import { createContext } from "react";
// let User = types.model({});

const RootModel = types.model({
    cart: Cart,
    // user:User
})

let initalState = RootModel.create({
    cart: { items: [] }
})


export const rootStore = initalState;
export type RootInstance = Instance<typeof RootModel>;
export const RootStoreContext = createContext<null | RootInstance>(null);

onSnapshot(rootStore, snapshot => {
    console.log("Snapshot ", snapshot);
    localStorage.setItem("rootState", JSON.stringify(snapshot));
});