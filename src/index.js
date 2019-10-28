import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './redux'
import AppStore from './components/AppStore'

ReactDOM.render(
  <AppStore>
    <Provider store={store}>
      <App />
    </Provider>
  </AppStore>,
  document.getElementById('root'),
)
