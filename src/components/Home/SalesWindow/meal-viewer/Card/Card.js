import React, {Component} from 'react';
import './Card.css';

import { connect } from 'react-redux';
import {addFoodToCartList,updateTotalCounter} from '../../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        addFoodToCartList: variety => dispatch(addFoodToCartList(variety)),
        updateTotalCounter: somethingNull => dispatch(updateTotalCounter(somethingNull))
    };
};

class CardConnected extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(event){
        let varietyObject = Object.assign({},this.props.variety,{quantity:1});

        this.props.addFoodToCartList(varietyObject);
        this.props.updateTotalCounter(null);
    }

    render(){
        return (
            <div className="Card-div" onClick={this.handleCardClick}>
                <p className="Card-p">{this.props.variety.name}</p>
            </div>
        );
    }
}

const Card = connect(null,mapDispatchToProps)(CardConnected);

export default Card;