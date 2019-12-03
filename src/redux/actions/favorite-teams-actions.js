import { FAVORITE_TEAMS } from './types'

export const addFavoriteTeam = (team) => ({
  type: FAVORITE_TEAMS.ADD,
  payload: team,
})

export const removeFavoriteTeam = (team) => ({
  type: FAVORITE_TEAMS.REMOVE,
  payload: team,
})

export const showAddFavoriteTeamNotification = (notificationStatus) => ({
  type: FAVORITE_TEAMS.SHOW_ADD_NOTIFICATION,
  payload: notificationStatus,
})

export const hideAddFavoriteTeamNotification = (notificationStatus) => ({
  type: FAVORITE_TEAMS.HIDE_ADD_NOTIFICATION,
  payload: notificationStatus,
})

export default undefined
