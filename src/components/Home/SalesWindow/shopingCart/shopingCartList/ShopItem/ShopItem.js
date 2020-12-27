import React, { Component } from 'react';
import './ShopItem.css';
import deleteIcon from '../../../../../../test-images/delete.png';

import { connect } from 'react-redux';
import { substractFoodToCartList,updateTotalCounter } from '../../../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        substractFoodToCartList: variety => dispatch(substractFoodToCartList(variety)),
        updateTotalCounter: somethingNull => dispatch(updateTotalCounter(somethingNull))
    };
};

class ShopItemConnected extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleDeleteButton(event){
        this.props.substractFoodToCartList(this.props.variety);
        this.props.updateTotalCounter(null);
    }

    render() {
        return (
            <div className="ShopItem-container">
                <span>{this.props.variety.name}</span>
                <span className="algo">
                    <span onClick={this.handleDeleteButton}>
                        <img className="shopItem-img" alt="img" src={deleteIcon} />
                    </span>
                    <span className="shopItem-floatShower">{this.props.variety.quantity}</span>
                </span>
            </div>
        );
    }
}

const ShopItem = connect(null, mapDispatchToProps)(ShopItemConnected);

export default ShopItem;