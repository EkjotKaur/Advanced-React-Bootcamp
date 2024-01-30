import memoize from "./memoize";


export default class Lib {

    @memoize()
    fibanocci(no: number): number {
        return ((no == 0) || (no == 1)) ? no : this.fibanocci(no - 1) + this.fibanocci(no - 2);
    }

    // @memoize()
    // getProducts(category:string, page: number): Product[] {
    //     // api call
    // }

    add(x: number, y: number): number {
        return x + y;
    }
}