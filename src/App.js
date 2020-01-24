import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Modal from './Modal/Modal';
import Doggos from './Puppies/Doggos';
// import German from './Puppies/German';
// import Husky from './Puppies/Husky';
// import Malinois from './Puppies/Malinois';
// import Malamute from './Puppies/Malamute';
// import Samoyed from './Puppies/Samoyed';
import './App.css';
// creating a state full function aka class
 class App extends Component {
   constructor(props){
     super(props)
     this.state = {
      //  random: '',
      //  gsh: '',
      //  huskys: '',
      //  mali: '',
      //  mala: '',
      //  samo: '',
      // key:"",
       open: false,
       dogData: [],
       apiData: []
     }
      this.openModal = this.openModal.bind(this)
      this.morePups = this.morePups.bind(this)
   }
   // create my fetch method
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({dogData: [res.message]})
        // console.log(res)
      })
      fetch("https://dog.ceo/api/breed/germanshepherd/images/random", {})
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({dogData: [...this.state.dogData, res.message], apiData:[...this.state.apiData, res]})
        console.log(this.state)
      })
      fetch("https://dog.ceo/api/breed/husky/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({dogData: [...this.state.dogData, res.message], apiData:[...this.state.apiData, res]})
        console.log(this.state)
        // console.log(res)
      })
      fetch("https://dog.ceo/api/breed/malinois/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({dogData: [...this.state.dogData, res.message]})
        // console.log(res)
    })
      fetch("https://dog.ceo/api/breed/malamute/images/random", {})
      .then(res => res.json())
      .then(res => {
        this.setState({dogData: [...this.state.dogData, res.message]})
        //console.log(res)
    })
    fetch("https://dog.ceo/api/breed/samoyed/images/random", {})
    .then(res => res.json())
    .then(res => {
      this.setState({dogData: [...this.state.dogData, res.message]})
      // console.log(this.state.dogData)
  })
}
//Now need to create a method to open Modal with a click event
openModal(props) {
  this.setState({
    ...this.state,
    open: !this.state.open
  });
  console.log("click")
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
        <Doggos onClick={this.openModal} doggos={this.state.dogData} label='doggos' />
        
          <Modal
          
          {...this.state}
          open={this.state.open}
          closeModal={this.openModal}
          />
        </div>

      </div>
     );
   }
}

export default App;
