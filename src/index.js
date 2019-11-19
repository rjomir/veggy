import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import {category, currency, isLoading} from "./components/layout/reducers"
import {Provider} from "react-redux";
import {productList} from "./components/productList/reducers";

export let store = createStore(combineReducers({
  category,
  currency,
  productList,
  isLoading
}))

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
