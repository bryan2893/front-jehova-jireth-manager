import React,{useEffect} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import M from 'materialize-css';
import './Home.css';

import imagenHamburguesa from '../../test-images/hamburguesa.png';
import logoSoda from '../../test-images/logo.png';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <ul id="dropdown1" className="dropdown-content">
            <li><Link to={`${props.match.url}/agregar_trabajador`}>Agregar trabajador</Link></li>
            <li><Link to={`${props.match.url}/actualizar_trabajador`}>Actualizar trabajador</Link></li>
            <li><Link to={`${props.match.url}/eliminar_trabajador`}>Eliminar trabajador</Link></li>
            </ul>

            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={`${props.match.url}/ventas`}>Ventas</Link></li>
                        <li><Link to={`${props.match.url}/compras`}>Compras</Link></li>
                        <li><Link to={`${props.match.url}/productos`}>Productos</Link></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Trabajadores<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

const Home = ({match}) => {

    useEffect(() => {
        let dropDownsElements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDownsElements);
    },[]);

    return (
        <div>

            <NavBar match = {match}/>

            <Switch>
                <Route exact path={`${match.path}`} component = {() => {
                    return (
                        <div className="container">
                            <div class="row">

                                <div class="col s6 m4">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Facturas</span>
                                        <p>Consulta información de facturas por rangos de fecha, por mes, por persona que editó la factura, etc...</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">Entrar</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s6 m4">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Personal</span>
                                        <p>Crea, actualiza, elimina y consulta información de clientes o trabajadores</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">Entrar</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s6 m4">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Proveedores</span>
                                        <p>
                                        Crea, actualiza, elimina y consulta proveedores del negocio.
                                        </p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">Entrar</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col s6 m4">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Administración de menú de comidas</span>
                                        <p>Crea, actualiza, elimina y consulta el menú de comidas</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">Entrar</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s6 m4">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">Administracion de materias primas</span>
                                        <p>Administra informacion de productos de abastecimiento para la preparacion de las comidas.</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">Entrar</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    );
                }} />

                <Route path={`${match.path}/agregar_trabajador`} component={() => {
                    return (
                        <h1>
                            AGREGAR TRABAJADOR
                        </h1>
                    );
                }} />
            </Switch>

        </div>
    )
};

export default Home;