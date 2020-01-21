import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
    }
    closeModal(evt) {
        this.props.closeModal && this.props.closeModal(evt)
        console.log('onclick')
    }

    render() {
        if(!this.props.open) {
            return null
        }
        console.log(this.props)
        return(
        <div className="dogModal">
            <div className="dogContent">
                <span onClick={this.closeModal}>&times;</span>
                <img className='dogImg' src={this.props.doggos} alt=""></img>
            </div>
        </div>
        )
    }
}

export default Modal; 