import React, {Component} from 'react';
import './ProductCard.css';
import Modal from '../../../../../service/Modal/Modal';
import ProductVarietiesDisplayer from '../ProductVarietiesDisplayer/ProductVarietiesDisplayer';

class ProductCard extends Component{
    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {modalOpen:false};
    }

    closeModal(){
        this.setState({modalOpen:false});
    }

    handleCardClick(event){
        if(!this.state.modalOpen){
            this.setState({modalOpen:true});
        }
    }

    render(){
        if(!this.state.modalOpen){
            return (
                <div className="CategoryCard-div" onClick={this.handleCardClick}>
                    <p className="CategoryCard-p">{this.props.product.name}</p>
                </div>
            );
        }else{
            return (
                <React.Fragment>
                    <div className="CategoryCard-div" onClick={this.handleCardClick}>
                        <p className="CategoryCard-p">{this.props.product.name}</p>
                    </div>
                    <Modal closeModal={this.closeModal}>
                        <ProductVarietiesDisplayer productId={this.props.product.productCode}/>
                    </Modal>
                </React.Fragment>
            );
        }
    }
}

export default ProductCard;