import React from 'react';
import './Home.css';

import Header from './Header/Header';
import Body from './Body/Body';

const Home = (props) => {
    {console.log(props.match.isExact)}
    return (
        <React.Fragment>
            <Header match={props.match}/>
            <Body match={props.match}/>
        </React.Fragment>
    )
};

export default Home;