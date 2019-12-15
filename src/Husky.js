import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class Husky extends Component {
    render() {
        return (
            <div>
                <button><img src={this.props.huskys} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Husky;