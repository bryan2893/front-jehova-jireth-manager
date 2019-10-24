import React, {Component} from 'react';
import './CategoryCard.css';

class CategoryCard extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(event){
        alert("Desplegando variedades para esta categoria...");
    }

    render(){
        return (
            <div className="CategoryCard-div" onClick={this.handleCardClick}>
                <p className="CategoryCard-p">{this.props.product.name}</p>
            </div>
        );
    }
}

export default CategoryCard;