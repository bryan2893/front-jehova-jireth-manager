import React from 'react';
import Card from './Card/Card';
import './Viewer.css';
import ViewerHeader from './ViewerHeader/ViewerHeader';

const Viewer = function(props){
    {console.log("Url en el componente viewer= "+props.match.url)}
    return (
        <div className="Viewer-container">
            <ViewerHeader match={props.match} categories={[{categoryId:1,name:"Comidas"},{categoryId:2,name:"Postres"},{categoryId:3,name:"Golosinas"}]}/>
            <div className="Viewer-subContainer">
                <div className="Viewer-productsContainer">
                    {props.foodList.map( (fod) => <Card key={fod.id} food={fod}/> )}
                </div>
            </div>
        </div>
    );
};

export default Viewer;