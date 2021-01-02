import React,{useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';
import M from 'materialize-css';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import HomeMenu from '../HomeMenu/HomeMenu';

const Home = ({match}) => {

    useEffect(() => {
        let dropDownsElements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDownsElements);
    },[]);

    return (
        <div>

            <Navbar match = {match}/>

            <Switch>
                <Route exact path={`${match.path}`} component = {HomeMenu} />

                <Route path={`${match.path}/agregar_trabajador`} component={() => {
                    return (
                        <h1>
                            AGREGAR TRABAJADOR
                        </h1>
                    );
                }} />

                <Route exact path={`${match.path}/personal`} component = {() => {
                    return <h1>Administracion de personal</h1>;
                }} />

            </Switch>

        </div>
    )
};

export default Home;