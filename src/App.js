import React from 'react';
import './App.css';
//import SalesWindow from './components/SalesWindow/SalesWindow';
import Alert from './components/Alert/Alert';
import Home from './components/Home/Home';

import {Provider} from 'react-redux';
import store from './redux/store';

//import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
