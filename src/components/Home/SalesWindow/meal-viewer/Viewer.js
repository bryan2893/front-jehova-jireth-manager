import React from 'react';
import Card from './Card/Card';
import './Viewer.css';

const Viewer = function(props){
    return (
        <div className="Viewer-container">
            <div className="Viewer-filterContainer">
                <button>Comidas</button>
                <button>Refrescos</button>
                <button>Golosinas</button>
                <button>Postres</button>
                <button>Comidas</button>
                <button>Refrescos</button>
                <button>Golosinas</button>
                <button>Postres</button>
                <button>Comidas</button>
                <button>Refrescos</button>
                <button>Golosinas</button>
                <button>Postres</button>
            </div>
            <div className="Viewer-subContainer">
                <div className="Viewer-productsContainer">
                    {props.foodList.map( (fod) => <Card key={fod.id} food={fod}/> )}
                </div>
            </div>
        </div>
    );
};

export default Viewer;