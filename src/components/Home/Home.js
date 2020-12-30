import React from 'react';
import './Home.css';

import Header from './Header/Header';
import Body from './Body/Body';

import {removeUserToken} from '../../service/auth';

/*
<React.Fragment>
    <Header match={props.match}/>
    <Body match={props.match}/>
</React.Fragment>
*/
const Home = (props) => {

    function desloguear(){
        removeUserToken();
        props.history.push('/');
    }

    return (
        <div>
            <h1>Bienvenido al Home</h1>
            <button onClick={desloguear}>Logout</button>
        </div>
    )
};

export default Home;