import React from 'react';
import './Header.css';
import logo from '../../../test-images/logo.png';
import {Link} from 'react-router-dom';

const Header = function(props){
    {console.log(`url = ${props.match.url}`)}
    return (
        <header className="Header-topnav">
            <img className="Header-logo" alt="img" src={logo} />
            <span className="Header-brandName">Jehová Jireth</span>
            <Link className="Header-link" to={`${props.match.url}/sales`}>Ventas</Link>
            <Link className="Header-link" to={`${props.match.url}/cierres`}>Cierres</Link>
            <Link className="Header-link" to={`${props.match.url}/facturas`}>Facturas</Link>
        </header>
    );
};

export default Header;