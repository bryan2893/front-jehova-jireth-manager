import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { enabledPosition: 0 };//Indica que item de los filtros esta activo.
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(event) {
        let currentClicked = Number(event.currentTarget.value);
        console.log(currentClicked);
        this.setState({enabledPosition:currentClicked});
    }

    render() {
        const SelfComponent = this;
        return (
            <div className="Filter-container">
                {this.props.filters.map(function (filter,index) {
                    if(index === SelfComponent.state.enabledPosition){
                        return (<button value={index} onClick={SelfComponent.handleFilterClick} key={filter.id} className={"Filter-item "+"Filter-higLighted"}>{filter.nombre}</button>)
                    }else{
                        return (<button value={index} onClick={SelfComponent.handleFilterClick} key={filter.id} className="Filter-item">{filter.nombre}</button>)
                    }
                })}
            </div>
        );
    }
}