import React from 'react';
import './ShopItem.css';

const ShopItem = function(props) {
    return (
        <div className="ShopItem-container">
            {props.food.name}
        </div>
    );
}

export default ShopItem;