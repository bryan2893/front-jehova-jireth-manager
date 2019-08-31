import React from 'react';
import './App.css';

import Header from './components/Header/Header';
//import Viewer from './components/Meal-Viewer/Viewer';
//import {getFoods} from './service/food';
import SalesWindow from './components/SalesWindow/SalesWindow';

function App() {
  return (
    <div className="App">
      <Header/>
      <SalesWindow/>
    </div>
  );
}

export default App;
