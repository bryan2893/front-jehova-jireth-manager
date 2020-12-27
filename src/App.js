import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Alert from './components/Alert/Alert';
import Home from './components/Home/Home';

import {Provider} from 'react-redux';
import store from './redux/store';

import {Switch,Route} from 'react-router-dom';

import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/app" component={Home} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
