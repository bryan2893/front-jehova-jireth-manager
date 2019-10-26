import React from 'react';
import './Login.css';
import logo from '../../test-images/logo.png';

import {Redirect} from 'react-router-dom';

import {login} from '../../service/auth';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {usernameText:"",passwordText:"",validUser:false};
        this.idInput = React.createRef();
    }

    componentDidMount(){
        this.idInput.current.focus();
    }

    handleUsername(event){
        this.setState({usernameText:event.target.value});
    }

    handlePassword(event){
        this.setState({passwordText:event.target.value});
    }

    handleOnSubmit(event){
        event.preventDefault();
        if (this.state.usernameText === "" || this.state.passwordText === ""){
            alert("Datos insuficientes!");
            return;
        }else{
            login(this.state.usernameText,this.state.passwordText).then((result) => {
                if(result.status === 200){
                    let token = result.data.token;
                    console.log("Token: "+token);
                    this.setState({validUser:true});
                }
            }).catch((error) => {
                alert(error.message);
            });
        }
    }

    render(){
        if (this.state.validUser){
            return <Redirect to="/app/sales" />;
        }else{
            return (
                <div className="Login-window-container">
                    <form onSubmit={this.handleOnSubmit} className="Login-form ">
                        <span className="Login-imgContainer"><img className="Login-img" src={logo} alt="logo jehovaJireth"/></span>
                        <input ref={this.idInput} type="text" placeholder="cedula" onChange={this.handleUsername}/>
                        <input type="password" placeholder="contraseña" onChange={this.handlePassword}/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        }
    }
}
