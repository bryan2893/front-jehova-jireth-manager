import React from 'react';
import './shopingCartList.css';

import ShopItem from './ShopItem/ShopItem';

const ShopingCartList = function(props) {
    return (
        <div className="shopingCartList-container">
            {props.shopItems.map( (variety) => <ShopItem key={variety.varietyId} variety={variety}/> )}
        </div>
    );
}

export default ShopingCartList;