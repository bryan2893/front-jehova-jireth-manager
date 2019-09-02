import React, { Component } from 'react';
import './ShopItem.css';
import deleteIcon from '../../../../test-images/delete.png';

import { connect } from 'react-redux';
import { deleteFoodFromCartList } from '../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFoodFromCartList: foodId => dispatch(deleteFoodFromCartList(foodId))
    };
};

class ShopItemConnected extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    handleDeleteButton(event){
        this.props.deleteFoodFromCartList(this.props.food.id);
    }

    render() {
        return (
            <div className="ShopItem-container">
                <span>{this.props.food.name}</span>
                <span onClick={this.handleDeleteButton}>
                    <img className="shopItem-img" alt="img" src={deleteIcon} />
                </span>
                <span className="shopItem-floatShower">{this.props.food.quantity}</span>
            </div>
        );
    }
}

const ShopItem = connect(null, mapDispatchToProps)(ShopItemConnected);

export default ShopItem;