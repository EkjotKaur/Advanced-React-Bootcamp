import { action, computed, makeObservable, observable } from "mobx";

export class CartItem {
    @observable
    id: number = 0;
    @observable
    title: string = "";
    @observable
    price: number = 0;
    @observable
    description: string = "";
    @observable
    image: string = "";
    @observable
    amount: number = 0;
    @observable
    quantity: number = 0;
    constructor(id: number, title: string,
        price: number, description: string, image: string,
        amount: number,
        quantity: number) {
            makeObservable(this);
            this.id = id;
            this.amount = amount;
            this.description = description;
            this.image = image;
            this.price = price;
            this.quantity = quantity;
            this.title = title;
    }

    @action
    increment() {
        this.quantity ++;
        this.amount = this.price * this.quantity;
    }
}

class CartStore {
    @observable
    cart:CartItem[]= [];
    constructor() {
        makeObservable(this);
    }

    @computed
    get total() {
        return this.cart.map(item => item.amount).reduce( (v1, v2) => v1+ v2, 0.0)
    }
    @computed
    get count() {
        return this.cart.length;
    }

    @action
    increment(id:number) {
        let product = this.cart.find(p => p.id === id);
        product?.increment();
    }

    @action
    addToCart(item:CartItem) {
        this.cart.push(item);
    }
}

const cartStore = new CartStore();
export default cartStore; // singleton