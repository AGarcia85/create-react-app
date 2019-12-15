import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class Malinois extends Component {
    render() {
        return (
            <div>
                <button><img src={this.props.mali} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Malinois;