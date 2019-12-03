import { PLAYERS } from '../actions/types'

const reducer = (state = [], action) => {
  switch (action.type) {
    // case TEAMS.FETCH:
    //     return action.payload

    case PLAYERS.PERSIST:
      return action.payload

    default:
      return state
  }
}

export default reducer
