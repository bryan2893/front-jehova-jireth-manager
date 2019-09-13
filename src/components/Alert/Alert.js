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
    if(alert.type === "succes"){
        return (
            <div className="Alert-succes" style={{opacity:alert.visibility}}>
                <p className="Alert-message"><span className="Alert-important">{alert.reason}</span> {alert.message}</p>
            </div>
        );
    }

    if(alert.type === "danger"){
        return (
            <div className="Alert-dander" style={{opacity:alert.visibility}}>
                <p className="Alert-message"><span className="Alert-important">{alert.reason}</span> {alert.message}</p>
            </div>
        );
    }

    return(
        <div style={{display:'none'}}>
            no alert yet!
        </div>
    );
    
    
}

const Alert = connect(mapStateToProps)(AlertConnected);

export default Alert;