import React from 'react'
import ReactDOM from 'react-dom'

import AppStore from "./components/AppStore";
import App from './components/App'

ReactDOM.render(
  <AppStore>
    <App />
  </AppStore>,
  document.getElementById('root')
);
