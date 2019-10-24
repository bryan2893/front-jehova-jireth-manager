import React from 'react';
import './Login.css';
import logo from '../../test-images/logo.png';

import {Redirect} from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {usernameText:"",passwordText:"",validUser:false};
    }

    handleUsername(event){
        this.setState({usernameText:event.target.value});
    }

    handlePassword(event){
        this.setState({passwordText:event.target.value});
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.setState({validUser:true});
    }

    render(){
        if (this.state.validUser){
            return <Redirect to="/app" />;
        }else{
            return (
                <div className="Login-window-container">
                    <form onSubmit={this.handleOnSubmit} className="Login-form ">
                        <span className="Login-imgContainer"><img className="Login-img" src={logo}/></span>
                        <input type="text" placeholder="username" onChange={this.handleUsername}/>
                        <input type="password" placeholder="password" onChange={this.handlePassword}/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        }
    }
}
