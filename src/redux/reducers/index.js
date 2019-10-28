import { combineReducers } from 'redux'
import drinksReducer from './drink-reducer'
import drinkInfoReducer from './drink-info-reducer'

export default combineReducers({
  drink: drinksReducer,
  info: drinkInfoReducer,
})
