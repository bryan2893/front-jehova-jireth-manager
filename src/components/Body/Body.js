import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './Body.css';

import SalesWindow from '../SalesWindow/SalesWindow';

const Home = function(props){
    return (
        <h1>HOME</h1>
    );
}

const Body = () => (
        <div className="Body-container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sales" component={SalesWindow} />
            </Switch>
        </div>
    );

export default Body;