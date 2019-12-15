import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class German extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal}><img src={this.props.gsh} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default German;