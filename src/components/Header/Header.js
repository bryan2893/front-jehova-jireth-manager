import React from 'react';
import './Header.css';
import logo from '../../test-images/logo.png';
import {Link} from 'react-router-dom';

const Header = function(props){
    return (
        <header className="Header-topnav">
            <img className="Header-logo" alt="img" src={logo} />
            <span className="Header-brandName">Jehová Jireth</span>
            <Link className="Header-link" to="/salesWindow">Ventana de ventas</Link>
            <Link className="Header-link" to="/cierres">Cierres</Link>
        </header>
    );
};

export default Header;