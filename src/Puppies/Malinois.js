import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Malinois extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal}><img src={this.props.mali} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Malinois;