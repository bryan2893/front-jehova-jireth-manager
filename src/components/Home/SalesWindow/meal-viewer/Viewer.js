import React from 'react';
import './Viewer.css';
import ViewerHeader from './ViewerHeader/ViewerHeader';

import { connect } from 'react-redux';
import {setProductCategories,setHighlightedCategoryId,setCurrentProducts} from '../../../../redux/actions';

import {getAllProductCategories} from '../../../../service/productCategory';
import {getProdutsByCategory} from '../../../../service/product';
import ProductCard from './ProductCard/ProductCard';

const mapDispatchToProps = (dispatch) => {
    return {
        setProductCategories: productCategory => dispatch(setProductCategories(productCategory)),
        setHighlightedCategoryId: categoryId => dispatch(setHighlightedCategoryId(categoryId)),
        setCurrentProducts: productsList => dispatch(setCurrentProducts(productsList))  
    };
};

class ViewerConnected extends React.Component{

    componentDidMount(){
        //Agregar una bandera indicando al usuario que esta esperando o "cargando..."
        getAllProductCategories().then((productCategoriesList)=>{
            console.log("Se obtuvo las categorias por llamada a la api!");
            this.props.setProductCategories(productCategoriesList);
            if(productCategoriesList.length > 0){
                let firstCategoryObject = productCategoriesList[0];
                this.props.setHighlightedCategoryId(firstCategoryObject.categoryId);
                getProdutsByCategory(firstCategoryObject.categoryId).then((productsList)=>{
                    console.log("Se obtuvieron los productos de la primera categoria");
                    //Asignar los prductos pertenecientes a la primera catagoria al store de redux.
                    this.props.setCurrentProducts(productsList);
                }).catch((error)=>{
                    alert(error.message);
                });
            }
        }).catch((error) => {
            //indicar que hubo un error.
            alert(error.message);
        });
    }

    render(){
        return (
            <div className="Viewer-container">
                <ViewerHeader match={this.props.match} productShowerState={this.props.productShowerState}/>
                <div className="Viewer-subContainer">
                    <div className="Viewer-productsContainer">
                        {this.props.productShowerState.currentProducts.map((product) => {
                            return <ProductCard key={product.productCode} product={product}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const Viewer = connect(null,mapDispatchToProps)(ViewerConnected);

export default Viewer;