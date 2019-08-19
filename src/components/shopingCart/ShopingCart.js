import React from 'react';
import './ShopingCart.css';

import ShopingCartForm from '../ShopingCartForm/ShopingCartForm';

const ShopingCart = function(props) {
    return (
        <div className="ShopingCart-container">
            <ShopingCartForm />
        </div>
    );
}

export default ShopingCart;