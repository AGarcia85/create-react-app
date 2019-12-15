import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Malamute extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal}><img src={this.props.mala} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Malamute;