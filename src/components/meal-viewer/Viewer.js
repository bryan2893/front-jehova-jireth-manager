import React from 'react';
import Card from '../Card/Card';
import Filter from './filter/filter';
import './Viewer.css';

const Viewer = function(props){
    return (
        <div className="Viewer-container">
            <Filter filters = {[{id:1,nombre:'comidas'},{id:2,nombre:'refrescos'},{id:3,nombre:'postres'}]}></Filter>
            {props.foodList.map( (fod) => <Card key={fod.id} food={fod}/> )}
        </div>
    );
};

export default Viewer;