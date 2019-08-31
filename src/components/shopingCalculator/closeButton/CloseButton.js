import React, { Component } from 'react';
import './CloseButton.css';
import { connect } from 'react-redux';
import {closeCalculator} from '../../../redux/actions/';

import exImg from '../../../test-images/ex.png';

function mapDispatchToProps(dispatch) {
    return {
        closeCalculator: something => dispatch(closeCalculator(something))
    };
}

class ConnectedCloseButton extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.props.closeCalculator(null);
    }

    render() {
        return (
            <img className="CloseButton-exCloser" alt="img" src={exImg} onClick={this.handleOnClick} />
        );
    }
}

const CloseButton = connect(null,mapDispatchToProps)(ConnectedCloseButton);

export default CloseButton;