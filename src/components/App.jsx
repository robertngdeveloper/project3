// import the libs we need
import React, { Component } from 'react';
import Style from './App.css';
import Bing from './bing/Bing.jsx';
import Vision from './vision/Vision.jsx';
import Rover from './rover/Rover.jsx';



// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      roverImages: [],
      searchImages: false,
      bingImage: [],
      visionText: ''
    }
  }

  getRoverImages(){
    fetch(`/rover`)
    .then(r => r.json())
    .then((data) => {
      console.log('$$$$$$', data)
      this.setState({
        roverImages: data
      })
    })
    .catch(err => console.log(err))
    console.log('%%%%%%', this.state.roverImages)
  }

  getVision(){
    fetch(`/vision/:url`)
    .then(r => r.json())
    .then((data) => {
      console.log('$$$$$$', data)
      this.setState({
        visionText: data
      })
    })
    .catch(err => console.log(err))
    console.log('%%%%%%', this.state.roverImages)
  }

  render(){
    return (
      <div className="app-container">
        <h1>Hello Mars</h1>
        <div className="image-container">
          <Rover
            roverData={this.state.roverImages}
            getRoverImages={this.getRoverImages.bind(this)}
          />
          <Bing />
        </div>
        <Vision />
      </div>
    );
  }
}

export default App;
