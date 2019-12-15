import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const dogModal = document.querySelector('.dogModal')

class Modal extends Component {
    closeModal() {
        document.addEventListener('click', function() {
            dogModal.style.display = "none";
        })
        console.log("click")
    }
    render(){
        return (
            <div className="dogModal">
                <div className="dogContent">
                    <span onClick={() => { this.closeModal()}}>&times;</span>
                    <img src={this.props.label} alt='puppies'></img>
                </div>
            </div>
        );
    }
}

export default Modal; 