import { combineReducers } from 'redux'
import teamsReducer from './teams-reducer'
import favoriteTeamsReducer from './favorite-teams-reducer'
import notificationsReducers from './notifications-reducer'
import playersReducer from './players-reducer'

export default combineReducers({
  teams: teamsReducer,
  favoriteTeams: favoriteTeamsReducer,
  notifications: notificationsReducers,
  players: playersReducer,
})
