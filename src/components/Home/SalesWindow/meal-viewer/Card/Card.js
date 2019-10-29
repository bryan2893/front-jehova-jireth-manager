import React, {Component} from 'react';
import './Card.css';
import deleteIcon from '../../../../../test-images/delete.png';

import { connect } from 'react-redux';
import {addFoodToCartList,updateTotalCounter,substractFoodToCartList} from '../../../../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        substractFoodToCartList: variety => dispatch(substractFoodToCartList(variety)),
        addFoodToCartList: variety => dispatch(addFoodToCartList(variety)),
        updateTotalCounter: somethingNull => dispatch(updateTotalCounter(somethingNull))
    };
};

class CardConnected extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleCardClick(event){
        let varietyObject = Object.assign({},this.props.variety,{quantity:1});

        this.props.addFoodToCartList(varietyObject);
        this.props.updateTotalCounter(null);
    }

    handleDeleteClick(event){
        this.props.substractFoodToCartList(this.props.variety);
        this.props.updateTotalCounter(null);
    }

    render(){
        return (
            <div className="Card-div" onClick={this.handleCardClick}>
                <p className="Card-p">{this.props.variety.name}</p>
                <img className="Card-deleteImg" src={deleteIcon} onClick={this.handleDeleteClick}/>
            </div>
        );
    }
}

const Card = connect(null,mapDispatchToProps)(CardConnected);

export default Card;