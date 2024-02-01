import { createAsyncThunk } from "@reduxjs/toolkit"
import Product from "../../model/Product"

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=5`)
        return (await response.json()) as Product[]
    }
)

// dispatch(fetchProducts())
// fetchProducts.pending
// fetchProducts.fulfilled
// fetchProducts.rejected