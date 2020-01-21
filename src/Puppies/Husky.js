import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Husky extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.huskys)
        return (
            <div>
                <img src={this.props.huskys} onClick={this.props.onClick} alt='puppies'></img>  
            </div>
        )
    }
}

export default Husky;