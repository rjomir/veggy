import { CART } from '../actions/types'

const addCartItem = (state, payload) => {
  const found = state.find(item => item.id === payload.id)

  if (found) {
    return state.map(cartItem => {
      if (payload.id === cartItem.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + payload.quantity,
        }
      }

      return cartItem
    })
  }
  return [...state, payload]
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case CART.ADD:
      return addCartItem(state, action.payload)

    case CART.REMOVE:
      return state

    default:
      return state
  }
}

export default reducer
