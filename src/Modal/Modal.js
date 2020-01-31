import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props)

        this.closeModal = this.closeModal.bind(this)
    }
    closeModal(evt) {
        this.props.closeModal && this.props.closeModal(evt)
        // console.log('onclick')
    }

    render() {
        if(!this.props.open) {
            return null
        }
        console.log(this.props.puppos)
        const modal = this.props.puppos.map((pic) => {
            return( <img src={pic.src} key={pic.id} alt="modal"></img>)
        })
        return(
        <div className="dogModal">
            <div className="dogContent">
                <span onClick={this.closeModal}>&times;</span>
                {modal}
                {/* <img className='dogImg' src={modal} alt=""></img> */}
            </div>
        </div>
        )
    }
}

export default Modal; 