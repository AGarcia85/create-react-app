import React, { Component } from 'react';
import Doggos from './Puppies/Doggos';
import './App.css';
// creating a state full function aka class
 class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       dogData: []
     }
      this.morePups = this.morePups.bind(this)
   }
   // create my fetch method
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            dogData: [
              {
                image: res.message,
                id: '01'
              }
            ]
          }
        )
      })
      fetch("https://dog.ceo/api/breed/germanshepherd/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            dogData: [
              ...this.state.dogData, 
              { 
                image: res.message, 
                id: '02' 
              }
            ]
          }
        )
      })
      fetch("https://dog.ceo/api/breed/husky/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            dogData: [
              ...this.state.dogData,
              {
                image: res.message,
                id: '03'
              }
            ]
          }
          )
      })
      fetch("https://dog.ceo/api/breed/malinois/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            dogData: [
              ...this.state.dogData,
              {
                image: res.message,
                id: '04'
              }
            ]
          }
        )
    })
      fetch("https://dog.ceo/api/breed/malamute/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            dogData: [
              ...this.state.dogData,
              {
                image: res.message,
                id: '05'
              }
            ]
          }
        )
    })
    fetch("https://dog.ceo/api/breed/samoyed/images/random", {})
    .then(res => res.json())
    .then(res => {
      this.setState(
        {
          dogData: [
            ...this.state.dogData,
            {
              image: res.message,
              id: '06'
            }
          ]
        }
      )
  })
}
// create a refresh function to load more doggies with click event
morePups() {
  window.location.reload(false);
}

   render() {
    //  console.log(this.state.dogData)
     return (
      <div className='head'>
        <header>
          <h1>Sweet Doggos</h1>
          <button onClick={this.morePups}>Fetch More Doggos</button>
        </header>
        <div className='kenel'>
        <Doggos doggos={this.state.dogData} label='doggos' />
        </div>
      </div>
     );
   }
}

export default App;
