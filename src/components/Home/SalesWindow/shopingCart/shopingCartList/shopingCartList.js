import React from 'react';
import './shopingCartList.css';

import ShopItem from './ShopItem/ShopItem';

const ShopingCartList = function(props) {
    return (
        <div className="shopingCartList-container">
            {props.shopItems.map( (fod) => <ShopItem key={fod.varietyId} food={fod}/> )}
        </div>
    );
}

export default ShopingCartList;