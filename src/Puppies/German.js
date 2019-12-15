import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class German extends Component {
    render() {
        return (
            <div>
                <button><img src={this.props.gsh} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default German;