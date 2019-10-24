import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './Body.css';

import SalesWindow from '../SalesWindow/SalesWindow';

const FacturasWindow = function(props){
    {console.log("El url de facturas es = "+props.match.url)}
    return (
        <h1>FACTURAS</h1>
    );
}

const Body = function(props){
    {console.log("El cuerpo tiene la url = "+props.match.url)}
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