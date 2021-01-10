import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className="NavigationBar-navigation-bar">
            <i onClick={props.goBack} className="medium material-icons">arrow_back</i>
        </div>
    );
}

export default NavigationBar;