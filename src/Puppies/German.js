import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class German extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.gsh)
        return (
            <div>
                <img src={this.props.gsh} onClick={this.props.onClick} alt='puppies'></img> 
            </div>
        )
    }
}

export default German;