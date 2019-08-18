import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header-component/Header';
import Viewer from './components/meal-viewer/Viewer';
import {getFoods} from './service/food';

function App() {
  return (
    <div className="App">
      <Header/>
      <Viewer foodList = {getFoods()}/>
    </div>
  );
}

export default App;
