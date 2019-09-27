import { takeEvery } from 'redux-saga/effects'

import { CART } from '../actions/types'
import { watchAddProducts } from './add-products-saga'

function* rootSaga() {
  yield takeEvery(CART.ADD, watchAddProducts)
}

export default rootSaga
