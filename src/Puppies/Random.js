import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Random extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal}><img src={this.props.doggos} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Random;