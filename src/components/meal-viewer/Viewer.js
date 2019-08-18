import React from 'react';
import Card from '../Card/Card';
import './Viewer.css';

/*
{props.foodList.map((fod) => <Card key={fod.id} food={fod} />)}
*/

const Viewer = function(props){
    return (
        <div className="Viewer-container">
            {props.foodList.map( (fod) => <Card key={fod.id} food={fod}/> )}
        </div>
    );
};

export default Viewer;