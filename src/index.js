import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppStore from './components/AppStore'
import App from './components/App'

import store from './redux'

ReactDOM.render(
  <AppStore>
    <Provider store={store}>
      <App />
    </Provider>
  </AppStore>,
  document.getElementById('root'), // eslint-disable-line no-undef
)
