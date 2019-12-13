import React, { Component } from 'react';

import './App.css';

 class App extends Component {
   constructor(){
     super()
     this.state = {
       doggos: ''
     }
   }
   getPups() {
     fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(dog => {
        console.log(dog)
      })
   }
   render() {
     return (
      <div>
        <header>
          <h1>My API</h1>
        </header>

        <div>
          <button />
          <button />
          <button />
          <button />
          <button />
          <button />
        </div>

      </div>
     );
   }
}

export default App;
