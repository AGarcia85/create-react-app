import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor() {
        super()
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
        return(
        <div className="dogModal">
            <div className="dogContent">
                <span onClick={this.closeModal}>&times;</span>
                <img src={this.props.label} alt='puppies' className='dogImg'></img>
            </div>
        </div>
        )
    }
}

export default Modal; 