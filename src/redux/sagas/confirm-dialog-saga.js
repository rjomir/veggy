import { put, take, takeEvery, race } from 'redux-saga/effects'
import { MODAL } from '../actions/types'
import { closeModal } from '../actions/modal-actions'
import { addCartItem } from '../actions/cart-items-actions'

function* runConfirmSaga({ payload }) {
  const { confirmed } = yield race({
    confirmed: take(MODAL.CONFIRMED),
    canceled: take(MODAL.CANCELED),
  })

  if (confirmed) {
    yield put(addCartItem(payload))
  }

  yield put(closeModal())
}

export default function*() {
  yield takeEvery(MODAL.OPEN, runConfirmSaga)
}
