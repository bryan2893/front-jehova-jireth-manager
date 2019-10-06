import React, { Component } from 'react';
import './ShopItem.css';
import deleteIcon from '../../../../test-images/delete.png';

import { connect } from 'react-redux';
import { substractFoodToCartList } from '../../../../redux/actions';
import { updateTotalCounter } from '../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        substractFoodToCartList: food => dispatch(substractFoodToCartList(food)),
        updateTotalCounter: something => dispatch(updateTotalCounter(something))
    };
};

class ShopItemConnected extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleDeleteButton(event){
        this.props.substractFoodToCartList(this.props.food);
        this.props.updateTotalCounter(null);//se dispara la accion para actualizar el contador.
    }

    render() {
        return (
            <div className="ShopItem-container">
                <span>{this.props.food.name}</span>
                <span className="algo">
                    <span onClick={this.handleDeleteButton}>
                        <img className="shopItem-img" alt="img" src={deleteIcon} />
                    </span>
                    <span className="shopItem-floatShower">{this.props.food.quantity}</span>
                </span>
            </div>
        );
    }
}

const ShopItem = connect(null, mapDispatchToProps)(ShopItemConnected);

export default ShopItem;