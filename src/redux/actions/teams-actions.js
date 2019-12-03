import { TEAMS } from './types'

export const fetchTeams = () => ({
  type: TEAMS.FETCH,
})

export const persistTeams = (payload) => ({
  type: TEAMS.PERSIST,
  payload,
})

export default undefined
