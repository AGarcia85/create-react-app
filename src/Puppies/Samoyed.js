import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Samoyed extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.samo)
        return (
            <div>
                <img src={this.props.samo} onClick={this.props.onClick} alt='puppies'></img>  
            </div>
        )
    }
}

export default Samoyed;