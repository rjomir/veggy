import { CART } from './types'

export const addCartItem = item => ({
  type: CART.ADD,
  payload: item,
})

export const removeCartItem = item => ({
  type: CART.REMOVE,
  payload: item,
})

export const showNewCartNotification = itemName => ({
  type: CART.SHOW_NOTIFICATION,
  payload: {
    itemName,
  },
})
