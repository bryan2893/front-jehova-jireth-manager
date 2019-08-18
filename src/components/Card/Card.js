import React from 'react';
import './Card.css';

const Card = function(props){
    
    return (
        <div className = "Card-div">
            <img className="Card-img" src={props.food.image}/>
            <p className="Card-p">{props.food.name}</p>
        </div>
    );
};

export default Card;