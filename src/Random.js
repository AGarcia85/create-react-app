import React, { Component } from 'react';
//import { Route, Link, Switch } from 'react-router-dom';

class Random extends Component {
    render() {
        return (
            <div className='container'>
                <button><img src={this.props.doggos} alt='puppies'></img></button>   
            </div>
        )
    }
}

export default Random;