import { FAVORITE_TEAMS } from '../actions/types'

const initialState = false

const notificationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_TEAMS.SHOW_ADD_NOTIFICATION:
      return true
    case FAVORITE_TEAMS.HIDE_ADD_NOTIFICATION:
      return false
    default:
      return state
  }
}

export default notificationsReducers
