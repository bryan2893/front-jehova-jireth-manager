import React, {Component} from 'react';
import './ProductVarietiesDisplayer.css';
import {getProductVarietiesOfAproduct} from '../../../../../service/ProductVariety';
import Card from '../Card/Card';


export default class ProductVarietiesDisplayer extends Component{
    constructor(props){
        super(props);
        this.state = {varietiesList:[]};
    }

    componentDidMount(){
        getProductVarietiesOfAproduct(this.props.productId).then((varieties) => {
            console.log(varieties);
            this.setState({varietiesList:varieties});
        }).catch((error) => {
            console.log(error.message);
        });
    }

    render(){
        return (
          <React.Fragment>
              {this.state.varietiesList.map((variety) => {return <Card key={variety.varietyId} food={variety} />})}
          </React.Fragment>
        );
    }
}