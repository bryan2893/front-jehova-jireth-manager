import React from 'react';
import './ShopingCart.css';

import ShopingCartForm from './ShopingCartForm/ShopingCartForm';
import ShopingCartList from './shopingCartList/shopingCartList';

const ShopingCart = function(props) {
    return (
        <div className="ShopingCart-container">
            <ShopingCartForm />
            <ShopingCartList shopItems={props.shopItems}/>
        </div>
    );
}

export default ShopingCart;