import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store/index'
// import { storeContext } from './utils/context'
import {Provider} from 'react-redux'

// ReactDOM.render(
//   <storeContext.Provider value={store}>
//     <App />
//   </storeContext.Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

