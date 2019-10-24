import React from 'react';
import './Viewer.css';
import ViewerHeader from './ViewerHeader/ViewerHeader';
import {Switch,Route} from 'react-router-dom';
import CategoryDisplayer from './CategoryDisplayer/CategoryDisplayer';

import { connect } from 'react-redux';
import {setProductCategories} from '../../../../redux/actions';
import store from '../../../../redux/store';

import {getAllProductCategories} from '../../../../service/productCategory';

const mapDispatchToProps = (dispatch) => {
    return {
        setProductCategories: productCategory => dispatch(setProductCategories(productCategory))     
    };
};

class ViewerConnected extends React.Component{

    componentDidMount(){
        //Agregar una bandera indicando al usuario que esta esperando.
        let actualState = store.getState();
        if(actualState.salesWindowState.productCategories.length === 0){
            getAllProductCategories().then((result)=>{
                if(result.status === 200){
                    console.log("Se obtuvo las categorias desde la api");
                    this.props.setProductCategories(result.data);
                }
            }).catch((error) => {
                //indicar que hubo un error.
                alert(error.message);
            });
        }
    }

    render(){
        return (
            <div className="Viewer-container">
                <ViewerHeader match={this.props.match} productCategories={this.props.productCategories}/>
                <div className="Viewer-subContainer">
                    <div className="Viewer-productsContainer">
                        <Switch>
                            <Route exact path='/app/sales' component={null}/>
                            <Route path='/app/sales/:categoryId' component={CategoryDisplayer}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const Viewer = connect(null,mapDispatchToProps)(ViewerConnected);

export default Viewer;