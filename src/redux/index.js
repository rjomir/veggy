import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas/sagas'

const DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
const sagaMiddleware = createSagaMiddleware()

// eslint-disable-next-line no-undef
const composeEnhancers = window[DEV_TOOLS] ? window[DEV_TOOLS]({}) : compose

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)

export default store
