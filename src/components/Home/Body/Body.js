import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './Body.css';

import SalesWindow from '../SalesWindow/SalesWindow';

const Algo = function(props){
    return (
        <h1>HOME</h1>
    );
}

const FacturasWindow = function(props){
    return (
        <h1>FACTURAS</h1>
    );
}

const Body = () => (
        <div className="Body-container">
            <Switch>
                <Route exact path="/" component={Algo} />
                <Route path="/sales" component={SalesWindow} />
                <Route path="/facturas" component={FacturasWindow} />
            </Switch>
        </div>
    );

export default Body;