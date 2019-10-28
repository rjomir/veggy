import { DRINKSINFO } from '../actions/types'

const reducer = (state = { id: '', info: null }, action) => {
  switch (action.type) {
    case DRINKSINFO.FETCH:
      return { ...state, id: action.payload }
    case DRINKSINFO.PERSIST:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

export default reducer
