import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class Malamute extends Component {
    render() {
        return (
            <div>
                <button><img src={this.props.mala} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Malamute;