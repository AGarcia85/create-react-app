import React, { Component } from 'react';
import Modal from './Modal/Modal'
import './App.css';
// creating a state full function aka class
 class App extends Component {
   constructor(props){
     super(props)
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
     console.log(this.state.samo)
     return (
      <div className='head'>
        <header>
          <h1>Sweet Doggos</h1>
        </header>

        <div className='kenel'>
          <Modal
          open={this.state.open}
          closeModal={this.openModal}
          src={this.state.doggos}
          src={this.state.gsh}
          src={this.state.huskys}
          src={this.state.mali}
          src={this.state.mala}
          src={this.state.samo}/> 
          <img onClick={this.openModal} src={this.state.doggos} alt='doggos'></img>
          <img onClick={this.openModal} src={this.state.gsh} alt='gsh'></img>
          <img onClick={this.openModal} src={this.state.huskys} alt='huskys'></img>
          <img onClick={this.openModal} src={this.state.mali} alt='mali'></img>
          <img onClick={this.openModal} src={this.state.mala} alt='malo'></img>
          <img onClick={this.openModal} src={this.state.samo} alt='samo'></img>
        </div>

      </div>
     );
   }
}

export default App;
