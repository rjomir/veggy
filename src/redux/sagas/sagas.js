import { all, call } from 'redux-saga/effects'
import productsSagas from './products-sagas'
import confirmDialogSaga from './confirm-dialog-saga'

function* rootSaga() {
  yield all([
    call(productsSagas),
    call(confirmDialogSaga)
  ])
}

export default rootSaga
