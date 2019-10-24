import React from 'react';
import Card from './Card/Card';
import './Viewer.css';
import ViewerHeader from './ViewerHeader/ViewerHeader';

const Viewer = function(props){
    return (
        <div className="Viewer-container">
            <ViewerHeader categories={[{categoryId:1,name:"Comidas"},{categoryId:2,name:"Postres"}]}/>
            <div className="Viewer-subContainer">
                <div className="Viewer-productsContainer">
                    {props.foodList.map( (fod) => <Card key={fod.id} food={fod}/> )}
                </div>
            </div>
        </div>
    );
};

export default Viewer;