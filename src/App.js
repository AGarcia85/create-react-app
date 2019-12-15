import React, { Component } from 'react';
import Random from './Puppies/Random';
import German from './Puppies/German';
import Husky from './Puppies/Husky';
import Malamute from './Puppies/Malamute';
import Malinois from './Puppies/Malinois';
import Samoyed from './Puppies/Samoyed';
import Modal from './Modal/Modal'
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
       samo: '',
       open: false
     }
     this.openModal = this.openModal.bind(this)
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
//Now need to create a method to open Modal with a click event
openModal() {
  const dogModal = document.querySelector(".dogModal")
  document.addEventListener('click', function() {
      dogModal.style.display = "block";
  })
  console.log("click")
}
    
   render() {
     return (
      <div className='head'>
        <header>
          <h1>Sweet Doggos</h1>
        </header>

        <div className='kenel'>
          <Modal dogModal={this.state.dogModal}/>
          <Random doggos={this.state.doggos} label={'doggos'}/>
          <German gsh={this.state.gsh} label={'gsh'}/>
          <Husky huskys={this.state.huskys} label={'huskys'}/>
          <Malinois mali={this.state.mali} label={'mali'}/>
          <Malamute mala={this.state.mala} label={'mala'}/>
          <Samoyed samo={this.state.samo} label={'samo'}/>
        </div>

      </div>
     );
   }
}

export default App;
