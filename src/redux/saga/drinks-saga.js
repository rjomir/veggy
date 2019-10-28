import { put, takeLatest, takeEvery, all, select } from 'redux-saga/effects'
import axios from 'axios'
import { persistDrinks } from '../actions/drinks-actions'
import { DRINKS } from '../actions/types'

export const getType = state => state.drink.type

function* fetchDrinksWatcher() {
  const type = yield select(getType)
  const repsonse = yield axios
    .get('https://the-cocktail-db.p.rapidapi.com/filter.php', {
      params: {
        c: type,
      },
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': 'b2b6cc77a7msh7321fa095283bcdp1515d2jsn472b979dee44',
      },
    })
    .then(({ data: { drinks } }) => drinks)
  yield put(persistDrinks(repsonse))
}

export default function*() {
  yield all([
    takeLatest(DRINKS.FETCH, fetchDrinksWatcher),
    takeEvery(DRINKS.TYPE, fetchDrinksWatcher),
  ])
}
