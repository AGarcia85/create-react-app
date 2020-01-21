import React, { Component } from 'react';
import './Puppies.css'
//import { Route, Link, Switch } from 'react-router-dom';

class Random extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const picture = this.props.doggos.map(pic => {
            return(<img src={pic} onClick={this.props.onClick} alt='puppies'></img>)
        })
        return (
            <div className="pound">
                {picture}
            </div>
        )
    }
}

export default Random;