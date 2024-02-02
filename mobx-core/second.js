const { observable, makeObservable, computed, autorun } = require("mobx");

class LineItem {
    price = 0;
    amount = 1;
    constructor(price) {
        makeObservable(this, {
            price: observable,
            amount: observable,
            total: computed
        });
        this.price = price;
    }

    // derivations
    get total() {
        console.log("Computing");
        return this.price * this.amount;
    }
}

const order = new LineItem(4);
// gets called first time and every time observable changes
autorun(() => {
    console.log("Total " + order.total);
})

console.log(order.total);

order.amount = 5; // total computed

order.price = 100; // total computed

console.log(order.total);