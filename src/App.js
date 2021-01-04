import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {Provider} from 'react-redux';
import store from './redux/store';

import {Switch,Route} from 'react-router-dom';

import Login from './components/Login/Login';

import UserLoggedMiddleware from './GUARDS/UserLogged';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Login} />
          <UserLoggedMiddleware path="/home" component={Home} />
          <Route path="*" component={() => (<h1>********RUTA NO EXISTE*******</h1>)} />

        </Switch>
      </div>
    </Provider>
  );
}

export default App;
