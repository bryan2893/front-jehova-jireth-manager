import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {getUserToken} from '../service/auth';

const UserLoggedMiddleware = ({component:Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            //lógica para determinar si el usuario está logueado.
            const userToken = getUserToken();
            if(userToken){
                return <Component {...props} />
            }else{
                return <Redirect to='/'/>
            }
        }} />
    );
}

export default UserLoggedMiddleware;