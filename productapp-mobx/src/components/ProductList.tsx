import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"
import ProductCard from "./ProductCard";

export default function ProductList() {
    let { products } = useContext(ProductContext); // Consumer
    return <div className="row">
        {
            products.map(p => <ProductCard key={p.id} product={p} />)
        }
    </div>
}