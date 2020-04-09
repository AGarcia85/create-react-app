import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props)

        this.closeModal = this.closeModal.bind(this)
    }
    closeModal(evt) {
        this.props.closeModal && this.props.closeModal(evt)
    }

    render() {
        if(!this.props.open) {
            return null
        }
        
        return(
        <div className="dogModal">
            <div className="dogContent">
                <span onClick={this.closeModal}>&times;</span>
                <img className='dogImg' src={this.props.puppos[this.props.currentDog].image} alt="pupperoo"></img>
            </div>
        </div>
        )
    }
}

export default Modal; 