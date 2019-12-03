import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';
import AppStore from './components/AppStore';
import store from './redux/index'

ReactDOM.render(
  <AppStore>
    <Provider store={store}>
      <App style={{ color: '#FFFFFF' }} />
    </Provider>
  </AppStore>, document.getElementById('root'),
);
