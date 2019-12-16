import React from 'react';
import './Modal.css';

const Modal = props => {
    
    function displayModal () {
        switch(props.dogInfo) {
            case 'Random':
                return <img className="dogImg">""</img>
            case 'German':
                return <img className="dogImg">""</img>
            case 'Husky':
                return <img className="dogImg">""</img>
            case 'Malinois':
                return <img className="dogImg">""</img>
            case 'Malamute':
                return <img className="dogImg">""</img>
            case 'Samoyed':
                return <img className="dogImg">""</img>
            default: return null
        }
    }
    //Now need to create a method to close Modal with a click event
    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()

    }
    
    let modal = (
        <div className="dogModal" onClick={ closeModal }>
            <div className="dogContent" onClick={e => e.stopPropagation()}>
                <span onClick={() => { this.closeModal()}}>&times;</span>
                <img className="dogImg"></img>
                    {displayModal()}
            </div>
        </div>
    )

    return ( props.openModal ? modal : null);
}
export default Modal; 