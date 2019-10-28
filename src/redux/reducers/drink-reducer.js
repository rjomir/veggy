import { DRINKS } from '../actions/types'

const reducer = (state = { items: [], type: 'Ordinary Drink' }, action) => {
  switch (action.type) {
    case DRINKS.FETCH:
      return state
    case DRINKS.PERSIST:
      return { ...state, items: action.payload }
    case DRINKS.TYPE:
      return { ...state, type: action.payload }
    default:
      return state
  }
}

export default reducer
