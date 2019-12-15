import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class Samoyed extends Component {
    render() {
        return (
            <div>
                <button><img src={this.props.samo} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Samoyed;