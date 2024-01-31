import { ReactNode, createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import axios from "axios";

type ContextType = {
    products: Product[]
}

type PropsType = {
    children: ReactNode
}
const ProductContext = createContext<ContextType>({
    products: []
});
export { ProductContext }

export default function ProductProvider(props: PropsType) {
    let [products, setProducts] = useState<Product[]>([]);

    // lifecycle hooks ==> componentDidMount()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
            setProducts(response.data);
        });
    }, []);

    return <ProductContext.Provider value={{ products }}>
        {props.children}
    </ProductContext.Provider>
}