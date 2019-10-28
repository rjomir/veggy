import { DRINKSINFO } from './types'

export const fetchDrinkInfo = payload => {
  return {
    type: DRINKSINFO.FETCH,
    payload,
  }
}

export const persistDrinkInfo = payload => ({
  type: DRINKSINFO.PERSIST,
  payload,
})
