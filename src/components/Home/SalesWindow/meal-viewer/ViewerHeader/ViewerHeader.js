import React from 'react';
import './ViewerHeader.css';
import {Link} from 'react-router-dom';

const ViewerHeader = function(props){
    return (
        <div className="ViewerHeader-filterContainer">
            {props.productCategories.map((productCategory) => <Link to={`${props.match.url}/${productCategory.categoryId}`} className="ViewerHeader-link" key={productCategory.categoryId}>{productCategory.name}</Link>)}
        </div>
    );
};

export default ViewerHeader;