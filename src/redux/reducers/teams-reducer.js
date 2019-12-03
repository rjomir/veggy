import { TEAMS } from '../actions/types'

const reducer = (state = [], action) => {
  switch (action.type) {
    // case TEAMS.FETCH:
    //     return action.payload

    case TEAMS.PERSIST:
      return action.payload

    default:
      return state
  }
}

export default reducer
