import React from 'react';
import './App.css';

import Header from './components/Header/Header';
//import Viewer from './components/Meal-Viewer/Viewer';
//import {getFoods} from './service/food';
import SalesWindow from './components/SalesWindow/SalesWindow';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <Alert/>
      <Header/>
      <SalesWindow/>
    </div>
  );
}

export default App;
