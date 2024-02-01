import { useDeferredValue, useState, useTransition } from "react";

const products = generateProducts();

function filterProducts(filterTerm) {

    if (!filterTerm) return products;
    return products.filter(p => p.includes(filterTerm));
}

export default function ReactApp() {
    // const [isPending, startTransition] = useTransition();

    const [filterTerm, setFilterTerm] = useState("");
    const filteredProducts = filterProducts(filterTerm);

    function updateFilterTerm(evt) {
        // startTransition(() => {
        //     setFilterTerm(evt.target.value);
        // })
        setFilterTerm(evt.target.value);
    }
    return (
        <div>
            <input type="text" onChange={updateFilterTerm} />
            {/* {isPending && <p>Updating List...</p>} */}
            <ProductList products={filteredProducts} />
        </div>
    )
}

function generateProducts() {
    const products = [];
    for (let i = 0; i < 10000; i++) {
        products.push(`Product ${i + 1}`);
    }
    return products;
}

function ProductList({ products }) {
    const deferredProducts = useDeferredValue(products);
    return (
        <ul>
            {deferredProducts.map(product => (
                <li key={product}>{product}</li>
            ))}
        </ul>
    )
}