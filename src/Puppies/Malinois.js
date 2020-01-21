import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Malinois extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.mali)
        return (
            <div>
                <img src={this.props.mali} onClick={this.props.onClick} alt='puppies'></img>  
            </div>
        )
    }
}

export default Malinois;