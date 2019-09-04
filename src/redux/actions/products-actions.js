import { PRODUCT } from "./types";

export const addProduct = payload => ({
    type: PRODUCT.ADD,
    payload: { name: "AAAA " } 
})