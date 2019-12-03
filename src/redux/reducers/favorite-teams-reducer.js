import { FAVORITE_TEAMS } from '../actions/types'

const addFavoriteTeam = (state, payload) => {
  const team = state.find((t) => t.id === payload.id)

  if (team) {
    return state.map((t) => t)
  }

  return [
    ...state,
    payload,
  ]
}

const removeFavoriteTeam = (state, payload) => {
  const team = state.find((t) => t.id === payload.id)

  if (team) {
    return state.filter((favoriteTeam) => favoriteTeam.id !== team.id)
  }

  return state
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_TEAMS.ADD:
      return addFavoriteTeam(state, action.payload)

    case FAVORITE_TEAMS.REMOVE:
      return removeFavoriteTeam(state, action.payload)

    default:
      return state
  }
}

export default reducer
