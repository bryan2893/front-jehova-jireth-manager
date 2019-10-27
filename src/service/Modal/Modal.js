import React from 'react';
import './Modal.css';

class Modal extends React.Component{

    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event){
        this.props.closeModal()
    }

    render(){
        const showHideClassname = "Modal-modal Modal-display-block";//this.props.modal.show ? "Modal-modal Modal-display-block": "Modal-modal Modal-display-none";
        return (
            <div className={showHideClassname}>
                <section className="Modal-modal-main">
                    {this.props.children}
                    <button onClick={this.handleOnClick}>close</button>
                </section>
            </div>
        );
    }
};

//const Modal = connect(mapStateToProps,mapDispatchToProps)(ModalConnected);

export default Modal;