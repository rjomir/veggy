import { put } from 'redux-saga/effects'
import { showNewCartNotification } from '../actions/cart-items-actions'

function* watchAddProducts ({ payload }) {
  const { name: cartItemName } = payload

  yield put(showNewCartNotification(cartItemName))
}

export { watchAddProducts }
