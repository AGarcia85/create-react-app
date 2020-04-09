import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Puppies.css'

class Random extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            currentDog: null
        }
        this.openModal = this.openModal.bind(this)
    }

openModal(id) {
    console.log(id)
    this.setState({
        ...this.state,
        currentDog: id,
        open: !this.state.open
    });
    }
    render() {
        // console.log(this.props.doggos)
        const picture = this.props.doggos.map((pic, i) => {
            return(<img src={pic.image} onClick={() => this.openModal(i)} alt='puppies' key={pic.id}></img>)
        })
        return (
            <div className="pound">
                {picture}
                <Modal
                    currentDog={this.state.currentDog}
                    open={this.state.open}
                    closeModal={this.openModal}
                    puppos={this.props.doggos}
                />
            </div>
        )
    }
}

export default Random;