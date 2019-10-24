import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './Body.css';

import SalesWindow from '../SalesWindow/SalesWindow';

const FacturasWindow = function(props){
    return (
        <h1>FACTURAS</h1>
    );
}

const Body = function(props){
    return (
        <div className="Body-container">
            <Switch>
                <Route path="/app/sales" component = {SalesWindow}/>
                <Route path="/app/facturas" component={FacturasWindow} />
            </Switch>
        </div>
    );
};

export default Body;