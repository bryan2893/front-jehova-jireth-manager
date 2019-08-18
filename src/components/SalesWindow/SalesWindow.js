import React from 'react';
import './SalesWindow.css';

import Viewer from '../Meal-Viewer/Viewer';
import ShopingCart from '../ShopingCart/ShopingCart';
import {getFoods} from '../../service/food';

const SalesWindow = function(props){
    
    return (
        <div className = "SalesWindow-container">
            <Viewer foodList={getFoods()}/>
            <ShopingCart></ShopingCart>
        </div>
    );
};

export default SalesWindow;