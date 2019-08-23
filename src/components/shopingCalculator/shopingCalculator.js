import React from 'react';
import './shopingCalculator.css';
import hamburguesaImage from '../../test-images/hamburguesa.png'

const ShopingCalculator = function (props) {

    return (
        <div className="shopingCalculator-container">
            <div className="shopingCalculator-imgContainer">
                <img className="shopingCalculator-image" src={hamburguesaImage} />
            </div>
            <div className=".shopingCalculator-calculatorButtonsContainer">
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

export default ShopingCalculator;