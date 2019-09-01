import React, { Component } from 'react';
import './shopingCalculator.css';

import { connect } from 'react-redux';
import { closeCalculator } from '../../redux/actions';
import { addFoodToCartList } from '../../redux/actions';
import exImg from '../../test-images/ex.png';

function mapDispatchToProps(dispatch) {
    return {
        closeCalculator: something => dispatch(closeCalculator(something)),
        addFoodToCartList: food => dispatch(addFoodToCartList(food))
    };
}

class ShopingCalculatorConnected extends Component {
    constructor(props) {
        super(props);
        this.state = { txtQuantity: '' };
        this.handleNumberButton = this.handleNumberButton.bind(this);
        this.handleOnChangeTxtQuantity = this.handleOnChangeTxtQuantity.bind(this);
        this.handleCloseButton = this.handleCloseButton.bind(this);
        this.handleAddFoodButton = this.handleAddFoodButton.bind(this);
    }

    handleAddFoodButton(event) {
        if (this.state.txtQuantity !== '') {
            let foodObject = Object.assign({},this.props.calculatorProperties.foodObject,{quantity:parseInt(this.state.txtQuantity)});
            this.props.addFoodToCartList(foodObject);
            this.setState({ txtQuantity: '' });
        }
    }

    handleCloseButton() {
        this.setState({ txtQuantity: '' });
        this.props.closeCalculator(null);
    }

    handleOnChangeTxtQuantity(event) {
        let number = parseInt(event.target.value);
        if (number || number === 0) {
            if (this.state.txtQuantity === '' && number === 0) {
                this.setState({ txtQuantity: '' });
            }
            else {
                this.setState({ txtQuantity: String(number) });
            }
        } else {
            this.setState({ txtQuantity: '' });
        }
    }

    handleNumberButton(event) {
        let number = parseInt(event.target.value);
        if (number || number === 0) {
            if (this.state.txtQuantity === '' && number === 0) {
                this.setState({ txtQuantity: '' });
            } else {
                this.setState(previosState => ({
                    txtQuantity: previosState.txtQuantity + String(number)
                }));
            }
        } else {
            this.setState({ txtQuantity: '' });
        }
    }

    render() {
        let isOpen = "none";
        if (this.props.calculatorProperties.isOpen) {
            isOpen = "initial";
        }
        return (
            <div className="shopingCalculator-container" style={{ display: isOpen }}>
                <div className="shopingCalculator-imgContainer">
                    <img className="shopingCalculator-image" alt="img" src={this.props.calculatorProperties.foodObject.image} />
                    <img className="shopingCalculator-exCloser" alt="img" src={exImg} onClick={this.handleCloseButton} />
                </div>
                <div className="shopingCalculator-calculatorButtonsContainer">
                    <input type="text" placeholder="cantidad..." value={this.state.txtQuantity} onChange={this.handleOnChangeTxtQuantity} />
                    <div className="shopingCalculator-buttonRow">
                        <button value="1" onClick={this.handleNumberButton}>1</button>
                        <button value="2" onClick={this.handleNumberButton}>2</button>
                        <button value="3" onClick={this.handleNumberButton}>3</button>
                    </div>
                    <div className="shopingCalculator-buttonRow">
                        <button value="4" onClick={this.handleNumberButton}>4</button>
                        <button value="5" onClick={this.handleNumberButton}>5</button>
                        <button value="6" onClick={this.handleNumberButton}>6</button>
                    </div>
                    <div className="shopingCalculator-buttonRow">
                        <button value="7" onClick={this.handleNumberButton}>7</button>
                        <button value="8" onClick={this.handleNumberButton}>8</button>
                        <button value="9" onClick={this.handleNumberButton}>9</button>
                    </div>
                    <div className="shopingCalculator-buttonRow">
                        <button value="0" onClick={this.handleNumberButton}>0</button>
                        <button className="shopingCalculator-acceptButton" onClick={this.handleAddFoodButton}>Agregar</button>
                    </div>
                </div>
            </div>
        );
    }
}

const ShopingCalculator = connect(null, mapDispatchToProps)(ShopingCalculatorConnected);

export default ShopingCalculator;