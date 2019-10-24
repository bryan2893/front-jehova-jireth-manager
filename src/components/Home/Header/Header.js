import React from 'react';
import './Header.css';
import logo from '../../../test-images/logo.png';
import {NavLink} from 'react-router-dom';

const Header = function(props){
    return (
        <header className="Header-topnav">
            <img className="Header-logo" alt="img" src={logo} />
            <span className="Header-brandName">Jehová Jireth</span>
            <NavLink activeClassName="Header-activeLink" className="Header-link" to={`${props.match.url}/sales`}>Ventas</NavLink>
            <NavLink activeClassName="Header-activeLink" className="Header-link" to={`${props.match.url}/cierres`}>Cierres</NavLink>
            <NavLink activeClassName="Header-activeLink" className="Header-link" to={`${props.match.url}/facturas`}>Facturas</NavLink>
        </header>
    );
};

export default Header;