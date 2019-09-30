import { createSelector } from 'reselect'
import { getCartItems, getProducts } from './common-selector';

const findById = (collection, id) => collection.find(item => item.id === id) 

export const cartItemsTotalCostSelector = createSelector(
    getCartItems,
    getProducts,
    (cartItems, products) => cartItems.reduce((sum, {id, quantity}) => {
        const product = findById(products, id)   

        return sum + (product.price * quantity)
    }, 0)
)

export const cartItemsSelector = createSelector(
    getCartItems,
    getProducts,
    (cartItems, products) => {
        return cartItems.map(cartItem => {
            const { price, image } = findById(products, cartItem.id)   

            return ({
                ...cartItem,
                price,
                image
            })

        })
    }
)