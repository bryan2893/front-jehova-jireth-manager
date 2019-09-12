import React, {Component} from 'react';
import './Alert.css';

import { connect } from 'react-redux';
//import {setProductToCalculator} from '../../redux/actions';

const mapStateToProps = state => {
    return {alert:state.alert}
};

/*
const mapDispatchToProps = (dispatch) => {
    return {
        setProductToCalculator: food => dispatch(setProductToCalculator(food))
    };
};
*/

const AlertConnected = function({alert}){

    return (
        <div className="Alert-container" style={{opacity:alert.visibility}}>
            <p className="Alert-message"><span className="Alert-important">{alert.reason}</span> {alert.message}</p>
        </div>
    );
    
}

const Alert = connect(mapStateToProps)(AlertConnected);

export default Alert;