import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import makeStore from './redux/store'

import App from './App';

const store=makeStore()

ReactDOM.render(

  <Provider store={store}>
  <Router>  
    <App />
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);
