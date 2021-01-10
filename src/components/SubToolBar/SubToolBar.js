import React from 'react';
import './SubToolBar.css';
import TagSelect from '../SubToolBar/TagSelect/TagSelect';

const SubToolBar = (props) => {

    return (
        <div id="subToolbar" className="row">

            <div className="input-field col s7">
                <i className="material-icons prefix">search</i>
                <input id="icon_telephone" type="tel" className="validate" onKeyUp={props.onKeyUpSearchBar}/>
                <label htmlFor="icon_telephone">Buscar</label>
            </div>

            <TagSelect onCategorySelect = {props.onCategorySelect}/>

        </div>
    );
};

export default SubToolBar;