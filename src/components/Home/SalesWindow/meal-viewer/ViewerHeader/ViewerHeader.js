import React from 'react';
import './ViewerHeader.css';
import {Link} from 'react-router-dom';

const ViewerHeader = function(props){
    {console.log("En el ViewerHeader url es = "+props.match.url)}
    return (
        <div className="ViewerHeader-filterContainer">
            {props.categories.map((category) => <Link to={`${props.match.url}/${category.categoryId}`} className="ViewerHeader-link" key={category.categoryId}>{category.name}</Link>)}
        </div>
    );
};

export default ViewerHeader;