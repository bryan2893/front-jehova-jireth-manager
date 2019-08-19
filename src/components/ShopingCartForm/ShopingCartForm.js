import React,{Component} from 'react';
import './ShopingCartForm.css';

export default class ShopingCartForm extends Component{
    constructor(props){
        super(props);
        this.state = {value:'',textAreaValue:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleTextAreaOnChange = this.handleTextAreaOnChange.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleTextAreaOnChange(event){
        this.setState({textAreaValue:event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="ShopingCartForm-form">
                <input type="text" placeholder="cliente..." value={this.state.value} onChange={this.handleChange} />
                <textarea value={this.state.textAreaValue} placeholder="Detalles..." onChange={this.handleTextAreaOnChange}/>

                <label class="container">Para llevar
                    <input type="checkbox"/>
                    <span class="checkmark" />
                </label>
                <label class="container">Pendiente
                    <input type="checkbox" />
                    <span class="checkmark" />
                </label>

                <input type="submit" value="Registrar" />

            </form>
        );
    }
}