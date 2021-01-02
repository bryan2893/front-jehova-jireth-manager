import React from 'react';
import './HomeMenu.css';
import {Link} from 'react-router-dom';

const HomeMenu = (props) => {
    return (
        <div className="container">
            <div class="row">

                <div class="col s6 m4">
                    <div class="card blue-grey darken-1 HomeMenu-onHoverCard">
                        <div class="card-content white-text">
                        <span class="card-title">Facturas</span>
                        <p>Consulta información de facturas por rangos de fecha, por mes, por persona que editó la factura, etc...</p>
                        </div>
                        <div class="card-action">
                            <Link to={`${props.match.url}/facturas`}>Entrar</Link>
                        </div>
                    </div>
                </div>

                <div class="col s6 m4">
                    <div class="card blue-grey darken-1 HomeMenu-onHoverCard">
                        <div class="card-content white-text">
                        <span class="card-title">Personal</span>
                        <p>Crea, actualiza, elimina y consulta información de clientes o trabajadores</p>
                        </div>
                        <div class="card-action">
                        <Link to={`${props.match.url}/personal`}>Entrar</Link>
                        </div>
                    </div>
                </div>

                <div class="col s6 m4">
                    <div class="card blue-grey darken-1 HomeMenu-onHoverCard">
                        <div class="card-content white-text">
                        <span class="card-title">Proveedores</span>
                        <p>
                        Crea, actualiza, elimina y consulta proveedores del negocio.
                        </p>
                        </div>
                        <div class="card-action">
                        <Link to={`${props.match.url}/proveedores`}>Entrar</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col s6 m4">
                    <div class="card blue-grey darken-1 HomeMenu-onHoverCard">
                        <div class="card-content white-text">
                        <span class="card-title">Administración de menú de comidas</span>
                        <p>Crea, actualiza, elimina y consulta el menú de comidas</p>
                        </div>
                        <div class="card-action">
                        <Link to={`${props.match.url}/ad_menu_comidas`}>Entrar</Link>
                        </div>
                    </div>
                </div>

                <div class="col s6 m4">
                    <div class="card blue-grey darken-1 HomeMenu-onHoverCard">
                        <div class="card-content white-text">
                        <span class="card-title">Administracion de materias primas</span>
                        <p>Administra informacion de productos de abastecimiento</p>
                        </div>
                        <div class="card-action">
                        <Link to={`${props.match.url}/ad_materias_primas`}>Entrar</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HomeMenu;