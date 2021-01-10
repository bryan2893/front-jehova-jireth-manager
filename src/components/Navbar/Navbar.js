import React from 'react';
import {Link} from 'react-router-dom';
import {removeUserToken} from '../../service/auth';

const NavBar = ({match,history}) => {

    function logOut(){
        removeUserToken();
        history.push('/');
    }

    return (
        <React.Fragment>
            <ul id="dropdown1" className="dropdown-content">
            <li><Link to={`${match.url}/agregar_trabajador`}>Agregar trabajador</Link></li>
            <li><Link to={`${match.url}/actualizar_trabajador`}>Actualizar trabajador</Link></li>
            <li><Link to={`${match.url}/eliminar_trabajador`}>Eliminar trabajador</Link></li>
            </ul>

            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={`${match.url}/ventas`}>Ventas</Link></li>
                        <li><Link to={`${match.url}/compras`}>Compras</Link></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Trabajadores<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a onClick={logOut}><i className="material-icons left">logout</i>Logout</a></li>
                    </ul>
                    </div>
                </nav>
            </div>

        </React.Fragment>
    );
};

export default NavBar;