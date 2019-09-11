import React from 'react';
import './TotalPurchase.css';

const TotalPurchase = function(props) {
    return (
        <div className="TotalPurchase-container">
            <span className="TotalPurchase-counter">
                ₡ {props.total}
            </span>
        </div>
    );
}

export default TotalPurchase;