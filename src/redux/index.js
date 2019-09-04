import { createStore } from 'redux'
import rootReducer from './reducers'



  let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f )

  window.store = store

  export default store

  store.subscribe(() => console.log(store.getState()))

  store.dispatch({ type: 'INCREMENT' })