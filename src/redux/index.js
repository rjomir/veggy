import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'

// eslint-disable-next-line no-undef
// const composeEnhancer = window[DEV_TOOLS] ? window[DEV_TOOLS]({}) : compose()
// eslint-disable-next-line no-undef
const store = createStore(rootReducer, composeWithDevTools());

export default store