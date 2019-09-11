import React,{Component} from 'react';
import './ShopingCartForm.css';

//PRUEBA
import {login} from '../../../service/auth';

export default class ShopingCartForm extends Component{
    constructor(props){
        super(props);
        this.state = {clientName:'',textAreaValue:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleTextAreaOnChange = this.handleTextAreaOnChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        
        /*
        login('11560083','casanueva4321').then((result)=>{
            console.log(result);
        }).catch((error) => {
            alert(error);
        });
        */
    }

    handleChange(event){
        this.setState({clientName:event.target.value});
    }

    handleTextAreaOnChange(event){
        this.setState({textAreaValue:event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="ShopingCartForm-form">
                <input type="text" placeholder="cliente..." value={this.state.clientName} onChange={this.handleChange} />
                <textarea value={this.state.textAreaValue} placeholder="Detalles..." onChange={this.handleTextAreaOnChange}/>

                <label className="container">Para llevar
                    <input type="checkbox"/>
                    <span className="checkmark" />
                </label>

                <label className="container">Pendiente
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <input type="submit" value="Registrar" />
                
            </form>
        );
    }
}