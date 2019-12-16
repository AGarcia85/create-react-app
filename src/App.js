import React, { Component } from 'react';
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
       open: false,
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
  this.setState({
    ...this.state,
    open: !this.state.open
  });
  console.log("click")
}    
   render() {
     return (
      <div className='head'>
        <header>
          <h1>Sweet Doggos</h1>
        </header>

        <div className='kenel'>
          <Modal
          open={this.state.open}
          closeModal={this.openModal}/> 
          <button onClick={this.openModal}><img src={this.state.doggos} alt='puppies' label='doggos'></img></button>
          <button onClick={this.openModal}><img src={this.state.gsh} alt='puppies' label='gsh'></img></button>
          <button onClick={this.openModal}><img src={this.state.huskys} alt='puppies' label='huskys'></img></button>
          <button onClick={this.openModal}><img src={this.state.mali} alt='puppies' label='mali'></img></button>
          <button onClick={this.openModal}><img src={this.state.mala} alt='puppies' label='mala'></img></button>
          <button onClick={this.openModal}><img src={this.state.samo} alt='puppies' label='samo'></img></button>
        </div>

      </div>
     );
   }
}

export default App;
