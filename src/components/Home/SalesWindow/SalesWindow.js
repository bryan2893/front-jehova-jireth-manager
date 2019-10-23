import React from 'react';
import './SalesWindow.css';

import Viewer from './meal-viewer/Viewer';
import ShopingCart from './shopingCart/ShopingCart';
import ShopingCalculator from './shopingCalculator/shopingCalculator';

import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {salesWindowState:state.salesWindowState}
};

const connectedSalesWindow = function({salesWindowState}){
    
    return (
        <React.Fragment>
            <Viewer foodList={salesWindowState.actualFoodList}/>
            <ShopingCart shopItems={salesWindowState.shopingCartList} total={salesWindowState.totalPurchase}></ShopingCart>
            <ShopingCalculator calculatorProperties={salesWindowState.calculator}/>
        </React.Fragment>
    );
};

const SalesWindow = connect(mapStateToProps)(connectedSalesWindow);

export default SalesWindow;