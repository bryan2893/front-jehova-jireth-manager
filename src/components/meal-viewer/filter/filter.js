import React, { Component } from 'react';
import './filter.css';
import store from '../../../redux/store/index';
import {setActualFoodList} from '../../../redux/actions';

import {getFoodsByCategory} from '../../../service/food';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { enabledPosition: 0 };//Indica que item de los filtros esta activo.
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(event) {
        let paramsArray = event.currentTarget.value.split(",");//Se extraen los valores del value del nodo html.
        let index = Number(paramsArray[0]);
        let categoryid = Number(paramsArray[1]);

        this.setState({enabledPosition:index});
        let foods = getFoodsByCategory(categoryid);
        store.dispatch(setActualFoodList(foods));
    }

    render() {
        const SelfComponent = this;
        return (
            <div className="Filter-container">
                {this.props.filters.map(function (filter,index) {
                    if(index === SelfComponent.state.enabledPosition){
                        return (<button value={index+","+filter.id} onClick={SelfComponent.handleFilterClick} key={filter.id} className={"Filter-item "+"Filter-higLighted"}>{filter.nombre}</button>)
                    }else{
                        return (<button value={index+","+filter.id} onClick={SelfComponent.handleFilterClick} key={filter.id} className="Filter-item">{filter.nombre}</button>)
                    }
                })}
            </div>
        );
    }
}