import axios from 'axios';
import {TOKEN_TRABAJADOR} from '../constantes/constantes';

//retorna un Promise.
export const authenticateUser = (cedula,contraseña)=>{
    return axios.post('http://localhost:3001/auth/autenticar_trabajador',{cedula: cedula,contraseña: contraseña});
};

export const verifyLocalstorageExists = () => {
    if (typeof(Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
}

export const setUserToken = (token) => {
    let response = window.localStorage.setItem(TOKEN_TRABAJADOR,token);
    return response;
};

export const getUserToken = () => {
    let response = window.localStorage.getItem(TOKEN_TRABAJADOR);
    return response;
};

export const removeUserToken = () => {
    let response = window.localStorage.removeItem(TOKEN_TRABAJADOR);
    return response;
};