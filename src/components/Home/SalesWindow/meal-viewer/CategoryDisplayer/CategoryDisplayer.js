import React, {Component} from 'react';
import './CategoryDisplayer.css';
import {getProdutsByCategory} from '../../../../../service/product';
import ProductCard from '../ProductCard/ProductCard';

class CategoryDisplayer extends Component{
    constructor(props){
        super(props);
        this.state = {products:[]};
    }

    loadData(){
        let categoryId = this.props.match.params.categoryId;

        getProdutsByCategory(categoryId).then((result) => {
            console.log(result.data);
            this.setState({products:result.data});
        }).catch((error) => {
            console.log("error: "+error.message);
        });
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        if(this.state.products === 0){
            return (<h1>Waiting...</h1>);
        }else{
            return (
                <React.Fragment>
                    {this.state.products.map((product) => (<ProductCard key={product.productCode} product={product} />))}
                </React.Fragment>
            );
        }
    }
}

export default CategoryDisplayer;