import React from 'react';
import './shopingCalculator.css';
import hamburguesaImage from '../../test-images/hamburguesa.png';

import {connect} from 'react-redux';

/*
const mapStateToProps = state => {
    return {calculator:state.salesWindowState.calculator}
};
*/

const ShopingCalculator = function (props) {
    let isOpen = "visible";
    if(props.calculatorProperties.isOpen){
        isOpen = "hidden";
    }
    return (
        <div className="shopingCalculator-container" style={{visibility:isOpen}}>
            <div className="shopingCalculator-imgContainer">
                <img className="shopingCalculator-image" src={hamburguesaImage} />
            </div>
            <div className="shopingCalculator-calculatorButtonsContainer">
                <input type="text" placeholder="cantidad..."/>
                <div className="shopingCalculator-buttonRow">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div className="shopingCalculator-buttonRow">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div className="shopingCalculator-buttonRow">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div className="shopingCalculator-buttonRow">
                    <button>0</button>
                </div>
            </div>
        </div>
    );
};

//const ShopingCalculator = connect(mapStateToProps)(ShopingCalculatorConnected);

export default ShopingCalculator;