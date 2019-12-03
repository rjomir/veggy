import { PLAYERS } from './types'

export const fetchPlayers = () => ({
  type: PLAYERS.FETCH,
})

export const persistPlayers = (payload) => ({
  type: PLAYERS.PERSIST,
  payload,
})

export default undefined
