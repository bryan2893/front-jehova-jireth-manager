import React, {Component} from 'react';
import './Card.css';

import { connect } from 'react-redux';
import {setProductToCalculator} from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setProductToCalculator: food => dispatch(setProductToCalculator(food))
    };
};

class CardConnected extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(event){
        let foodObject = {};
        foodObject.name = this.props.food.name;
        foodObject.image = this.props.food.image;
        this.props.setProductToCalculator(foodObject);
    }

    render(){
        return (
            <div className="Card-div" onClick={this.handleCardClick}>
                <img className="Card-img" alt="img" src={this.props.food.image} />
                <p className="Card-p">{this.props.food.name}</p>
            </div>
        );
    }
}

const Card = connect(null,mapDispatchToProps)(CardConnected);

export default Card;