// import the libs we need
import React, { Component } from 'react';
import './App.css';
import Bing from './bing/Bing.jsx';
import Vision from './vision/Vision.jsx';
import Rover from './rover/Rover.jsx';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render(){
    return (
      <div>
        <h1>Hello Mars</h1>
          <div id="pic-container">
              <Rover />
              <Bing />
          </div>
        <Vision />
      </div>
    );
  }
}

export default App;
