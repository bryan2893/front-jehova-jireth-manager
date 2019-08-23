import React from 'react';
import './SalesWindow.css';

import Viewer from '../meal-viewer/Viewer';
import ShopingCart from '../shopingCart/ShopingCart';
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