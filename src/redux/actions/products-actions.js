import { PRODUCTS } from "./types";

export const addProduct = payload => ({
    type: PRODUCTS.ADD,
    payload: { name: "AAAA " } 
})

export const updateProducts = (products = []) => ({
    type: PRODUCTS.UPDATE,
    payload: products
})

export default undefined