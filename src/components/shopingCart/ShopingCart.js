import React from 'react';
import './ShopingCart.css';

import ShopingCartForm from './ShopingCartForm/ShopingCartForm';
import ShopingCartList from './shopingCartList/shopingCartList';
import TotalPurchase from './totalPurchase/TotalPurchase';

const ShopingCart = function(props) {
    return (
        <div className="ShopingCart-container">
            <ShopingCartForm />
            <ShopingCartList shopItems={props.shopItems}/>
            <TotalPurchase total={props.total}/>
        </div>
    );
}

export default ShopingCart;