import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

class Modal extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    //Now need to create a method to close Modal with a click event
    closeModal() {
        this.setState({
        show: false
        });
    }
    render(){
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="dogModal">
                <div className="dogContent">
                    <span onClick={() => { this.closeModal()}}>&times;</span>
                    <img src={this.props.children} alt='puppies'></img>
                </div>
            </div>
        );
    }
}

export default Modal; 