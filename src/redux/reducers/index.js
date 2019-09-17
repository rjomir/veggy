import { combineReducers } from "redux"
import productsReducer from './products-reducer'
import cartItemsReducer from './cart-items-reducer'

export default combineReducers({
    products: productsReducer,
    cartItems: cartItemsReducer
})
