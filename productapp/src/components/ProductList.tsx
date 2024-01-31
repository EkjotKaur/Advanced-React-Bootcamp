import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"

export default function ProductList() {
    let { products } = useContext(ProductContext); // Consumer
    return <div>
        ProductList
    </div>
}