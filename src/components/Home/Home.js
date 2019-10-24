import React from 'react';
import './Home.css';

import Header from './Header/Header';
import Body from './Body/Body';

const Home = (props) => {
    return (
        <React.Fragment>
            <Header match={props.match}/>
            <Body match={props.match}/>
        </React.Fragment>
    )
};

export default Home;