import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Malamute extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.mala)
        return (
            <div>
                <img src={this.props.mala} onClick={this.props.onClick} alt='puppies'></img>   
            </div>
        )
    }
}

export default Malamute;