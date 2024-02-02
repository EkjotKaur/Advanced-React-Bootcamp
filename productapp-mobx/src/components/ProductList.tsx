import { useContext, useEffect } from "react"
// import { ProductContext } from "../context/ProductProvider"
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchProducts } from "../redux/api/ProductApi";

export default function ProductList() {
    // let { products } = useContext(ProductContext); // Consumer
    let dispatch = useAppDispatch();
    let { list: products, status, error } = useAppSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return <div className="row">
        {
            (status === 'loading') ? <h1>Loading...</h1> :
                products!.map(p => <ProductCard key={p.id} product={p} />)
        }
    </div>
}