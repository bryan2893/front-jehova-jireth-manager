import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './Login.css';
import logo from '../../test-images/logo.png';

import {Redirect} from 'react-router-dom';

import {login} from '../../service/auth';


function Login(props){

    function handleOnSubmit(event){
        event.preventDefault();
        let [cedula,contraseña] = event.target;
        // cedula.value and contraseña.value get values of each one...
    }

    return (
        <div className="Login-window-container">
            <form onSubmit={handleOnSubmit} className="Login-form ">
                <span className="Login-imgContainer"><img className="Login-img" src={logo} alt="logo jehovaJireth"/></span>

                <div id="inpCedula" className="input-field Login-input">
                    <input id="cedula" type="text" className="validate" name="cedula"/>
                    <label htmlFor="cedula">Cedula</label>
                </div>

                <div id="inpContraseña" className="input-field Login-input">
                    <input id="contraseña" type="password" className="validate" name="contraseña"/>
                    <label htmlFor="contraseña">Contraseña</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit">
                    Ingresar
                </button>

            </form>
        </div>
    )
}

export default Login;
