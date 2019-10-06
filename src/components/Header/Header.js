import React from 'react';
import './Header.css';
import logo from '../../test-images/logo.png';

const Header = function(props){
    return (
        <header className="Header-topnav">
            <img className="Header-logo" alt="img" src={logo} />
            <span className="Header-brandName">Jehová Jireth</span>
        </header>
    );
};

export default Header;