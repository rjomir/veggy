import { CART } from '../actions/types'

const initialState = false

const notificationReducer = (state = initialState, { type }) => {
  switch (type) {
    case CART.SHOW_NOTIFICATION:
      return !state

    default:
      return state
  }
}

export default notificationReducer
