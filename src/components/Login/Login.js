import React,{useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css';
import './Login.css';
import logo from '../../test-images/logo.png';

import {authenticateUser,setUserToken,getUserToken} from '../../service/auth';

import {Redirect} from 'react-router-dom';
//import {login} from '../../service/auth';


function Login(){

    const [isLoggedIn,setIsloggedIn] = useState(false);

    function handleOnSubmit(event){
        event.preventDefault();
        let [cedula,contraseña] = event.target;
        //hacer llamada al API para verificar las credenciales del usaurio.
        authenticateUser(cedula.value,contraseña.value).then((response) => {

            const sendedData = response.data;
            setUserToken(sendedData.token);
            setIsloggedIn(true);

        }).catch((error) => {
            if(error.response){
                const statusCode = error.response.status;// Se obtiene el código de error.
                const sendedData = error.response.data;//Se obtiene la data enviada.
            }else{
                const errorMessage = error.message;
                console.log(errorMessage);
            }
        });
    }

    const loginForm = (
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
    );

    return !isLoggedIn ? loginForm : <Redirect to='/home'/>

}

export default Login;
