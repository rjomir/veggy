import { PRODUCTS } from "./types";

export const fetchProducts = () => ({
    type: PRODUCTS.FETCH
})

export const addProduct = payload => ({
    type: PRODUCTS.ADD,
    payload
})

export const updateProduct = payload => ({
    type: PRODUCTS.UPDATE,
    payload
})

export const removeProduct = id => ({
    type: PRODUCTS.REMOVE,
    id
})

export const persistProducts = payload => ({
    type: PRODUCTS.PERSIST,
    payload
})

export default undefined