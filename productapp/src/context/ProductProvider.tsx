import { createContext } from "react";
import Product from "../model/Product";

type ContextType = {
    products: Product[]
}
const ProductContext = createContext<ContextType>({
    products: []
});

export default function ProductProvider() {

}