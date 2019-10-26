import React from 'react';
import './ViewerHeader.css';
import { connect } from 'react-redux';
import {setCurrentProducts,setHighlightedCategoryId} from '../../../../../redux/actions';
import {getProdutsByCategory} from '../../../../../service/product';

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentProducts: productsList => dispatch(setCurrentProducts(productsList)),
        setHighlightedCategoryId: categoryId => dispatch(setHighlightedCategoryId(categoryId)) 
    };
};

class ViewerHeaderConnected extends React.Component{

    constructor(props){
        super(props);
        this.handleProductCategoryClick = this.handleProductCategoryClick.bind(this);
    }

    handleProductCategoryClick(event){
        let categoryId = parseInt(event.target.id);
        let selfReference = this;
        selfReference.props.setHighlightedCategoryId(categoryId);
        getProdutsByCategory(categoryId).then((productsList)=>{
            selfReference.props.setCurrentProducts(productsList);   
        }).catch((error)=>{
            alert(error.message);
        });
    }

    render(){
        return (
            <div className="ViewerHeader-filterContainer">
                {this.props.productShowerState.productCategories.map((productCategory) => {

                    if(this.props.productShowerState.highlightedCategoryId === productCategory.categoryId){
                        return (<span id={productCategory.categoryId} onClick={this.handleProductCategoryClick} 
                                className="ViewerHeader-span ViewerHeader-active" key={productCategory.categoryId}>{productCategory.name}</span>);
                    }
                    
                    return (<span id={productCategory.categoryId} onClick={this.handleProductCategoryClick} 
                    className="ViewerHeader-span" key={productCategory.categoryId}>{productCategory.name}</span>);
                })}
            </div>
        );
    }
};

const ViewerHeader = connect(null,mapDispatchToProps)(ViewerHeaderConnected);
export default ViewerHeader;