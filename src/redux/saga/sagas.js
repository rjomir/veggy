import { all, call } from 'redux-saga/effects'
import drinksSaga from './drinks-saga'
import drinkDetailsSaga from './drinks-details-saga'

function* rootSaga() {
  yield all([call(drinksSaga), call(drinkDetailsSaga)])
}

export default rootSaga
