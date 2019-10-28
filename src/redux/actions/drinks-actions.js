import { DRINKS } from './types'

export const persistDrinks = payload => ({
  type: DRINKS.PERSIST,
  payload,
})

export const fetchDrinks = () => ({
  type: DRINKS.FETCH,
})

export const updateDrinkType = payload => ({
  type: DRINKS.TYPE,
  payload,
})
