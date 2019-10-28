import { put, takeEvery, all, select } from 'redux-saga/effects'
import axios from 'axios'
import { persistDrinkInfo } from '../actions/drink-info-actions'
import { DRINKSINFO } from '../actions/types'

export const getID = state => state.info.id

function* fetchDrinksInfoWatcher() {
  const id = yield select(getID)
  const repsonse = yield axios
    .get('https://the-cocktail-db.p.rapidapi.com/lookup.php', {
      params: {
        i: id,
      },
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': 'b2b6cc77a7msh7321fa095283bcdp1515d2jsn472b979dee44',
      },
    })
    .then(({ data: { drinks } }) => drinks[0])
  yield put(persistDrinkInfo(repsonse))
}

export default function*() {
  yield all([takeEvery(DRINKSINFO.FETCH, fetchDrinksInfoWatcher)])
}
