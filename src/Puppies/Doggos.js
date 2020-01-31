import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Puppies.css'

class Random extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.openModal = this.openModal.bind(this)
    }

openModal(props) {
    this.setState({
        ...this.state,
        open: !this.state.open
    });
    }
    render() {
        console.log(this.props.doggos)
        const picture = this.props.doggos.map((pic) => {
            return(<img src={pic.image} onClick={this.openModal} alt='puppies' id={pic.id}></img>)
        })
        console.log(picture)
        return (
            <div className="pound">
                {picture}
                <Modal
                    {...this.state}
                    open={this.state.open}
                    closeModal={this.openModal}
                    puppos={picture}
                />
            </div>
        )
    }
}

export default Random;