import React from 'react';
import './SalesWindow.css';

import Viewer from './meal-viewer/Viewer';
import ShopingCart from './shopingCart/ShopingCart';
import ShopingCalculator from './shopingCalculator/shopingCalculator';

import {connect} from 'react-redux';

const mapStateToProps = (state,props) => {
    return {
        salesWindowState:state.salesWindowState,
        props:props
    }
};

const connectedSalesWindow = function({salesWindowState,props}){
    
    return (
        <React.Fragment>
            <Viewer productShowerState={salesWindowState.productShower} match={props.match}/>
            <ShopingCart shopItems={salesWindowState.shopingCartList} total={salesWindowState.totalPurchase} />
            <ShopingCalculator calculatorProperties={salesWindowState.calculator} />
        </React.Fragment>
    );
};

const SalesWindow = connect(mapStateToProps)(connectedSalesWindow);

export default SalesWindow;