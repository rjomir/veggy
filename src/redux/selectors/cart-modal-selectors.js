import { createSelector } from 'reselect'
import { getCartItems, getProducts } from './common-selector';

export const cartItemsTotalCostSelector = createSelector(
    getCartItems,
    getProducts,
    (cartItems, products) => cartItems.reduce((sum, {id, quantity}) => {
        const product = products.find(item => item.id === id)

        return sum + (product.price * quantity)
    }, 0)
)

export const cartItemsSelector = createSelector(
    getCartItems,
    getProducts,
    (cartItems, products) => {
        return cartItems.map(cartItem => {
            const { price, image } = products.find(item => item.id === cartItem.id)    

            return ({
                ...cartItem,
                price,
                image
            })

        })
    }
)