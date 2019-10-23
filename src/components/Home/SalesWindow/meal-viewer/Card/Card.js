import React, {Component} from 'react';
import './Card.css';

import { connect } from 'react-redux';
import {addFoodToCartList,updateTotalCounter} from '../../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        addFoodToCartList: food => dispatch(addFoodToCartList(food)),
        updateTotalCounter: something => dispatch(updateTotalCounter(something))
    };
};

class CardConnected extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(event){
        let foodObject = Object.assign({},this.props.food,{quantity:1});

        this.props.addFoodToCartList(foodObject);
        this.props.updateTotalCounter(null);
    }

    render(){
        return (
            <div className="Card-div" onClick={this.handleCardClick}>
                <p className="Card-p">{this.props.food.name}</p>
            </div>
        );
    }
}

const Card = connect(null,mapDispatchToProps)(CardConnected);

export default Card;