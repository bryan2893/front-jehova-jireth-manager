import React from 'react';
import './ViewerHeader.css';

const ViewerHeader = function(props){
    return (
        <div className="ViewerHeader-filterContainer">
            {props.categories.map((category) => <button key={category.categoryId}>{category.name}</button>)}
        </div>
    );
};

export default ViewerHeader;