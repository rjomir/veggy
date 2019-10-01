import { call } from 'redux-saga/effects'
import productsSagas from './products-sagas'

function* rootSaga() {
  yield call(productsSagas)
}

export default rootSaga
