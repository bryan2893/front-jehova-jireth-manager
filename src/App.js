import React from 'react';
import './App.css';

import Header from './components/Header/Header';

//import SalesWindow from './components/SalesWindow/SalesWindow';
import Body from './components/Body/Body';
import Alert from './components/Alert/Alert';

import {Provider} from 'react-redux';
import store from './redux/store';
/*
<Header/>
<Body/>
*/
import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Alert/>
        <Login />
      </div>
    </Provider>
  );
}

export default App;
