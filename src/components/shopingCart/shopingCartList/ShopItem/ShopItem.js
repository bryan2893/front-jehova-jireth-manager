import React from 'react';
import './ShopItem.css';
import deleteIcon from '../../../../test-images/delete.png'

const ShopItem = function(props) {
    return (
        <div className="ShopItem-container">
            <span>{props.food.name}</span>
            <span className="shopItem-deleteIcon">
                <img className="shopItem-img" alt="img" src={deleteIcon} />
            </span>
            <span className="shopItem-floatShower">{props.food.quantity}</span>
        </div>
    );
}

export default ShopItem;