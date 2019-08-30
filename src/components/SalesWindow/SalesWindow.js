import React from 'react';
import './SalesWindow.css';

import Viewer from '../meal-viewer/Viewer';
import ShopingCart from '../shopingCart/ShopingCart';
import ShopingCalculator from '../shopingCalculator/shopingCalculator';

import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {salesWindowState:state.salesWindowState}
};

const connectedSalesWindow = function({salesWindowState}){
    
    return (
        <div className = "SalesWindow-container">
            <Viewer foodList={salesWindowState.actualFoodList}/>
            <ShopingCart></ShopingCart>
            <ShopingCalculator calculatorProperties={salesWindowState.calculator}/>
        </div>
    );
};

const SalesWindow = connect(mapStateToProps)(connectedSalesWindow);

export default SalesWindow;