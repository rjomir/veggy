import { call } from 'redux-saga/effects'

import teamsSagas from './teams-sagas'

function* rootSaga() {
  yield call(teamsSagas)
}

export default rootSaga
