import React, { Component } from 'react';
import Random from './Puppies/Random';
import German from './Puppies/German';
import Husky from './Puppies/Husky';
import Malamute from './Puppies/Malamute';
import Malinois from './Puppies/Malinois';
import Samoyed from './Puppies/Samoyed';
import './App.css';
// creating a state full function aka class
 class App extends Component {
   constructor(){
     super()
     this.state = {
       doggos: '',
       gsh: '',
       huskys: '',
       mali: '',
       mala: '',
       samo: ''
     }
   }
   // create my fetch method
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({doggos: res.message})
        console.log(res)
      })
      fetch("https://dog.ceo/api/breed/germanshepherd/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({gsh: res.message})
        console.log(res)
    })
    fetch("https://dog.ceo/api/breed/husky/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({huskys: res.message})
        console.log(res)
      })
      fetch("https://dog.ceo/api/breed/malinois/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({mali: res.message})
        console.log(res)
    })
      fetch("https://dog.ceo/api/breed/malamute/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({mala: res.message})
        console.log(res)
    })
    fetch("https://dog.ceo/api/breed/samoyed/images/random", {})
    .then(res => res.json())
    .then(res => {
      this.setState({samo: res.message})
      console.log(res)
  })

   }
    
   render() {
     return (
      <div>
        <header>
          <h1>Sweet Doggos</h1>
        </header>

        <div className='kenel'>
        <Random doggos={this.state.doggos}/>
        <German gsh={this.state.gsh}/>
        <Husky huskys={this.state.huskys}/>
        <Malinois mali={this.state.mali}/>
        <Malamute mala={this.state.mala}/>
        <Samoyed samo={this.state.samo}/>
        </div>

      </div>
     );
   }
}

export default App;
