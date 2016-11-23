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
      roverImage: '',
      searchImages: false,
      bingImage: '',
      visionText: ''
    }
  }

  getVisionData(url) {
    console.log('^^^^^^^^^', url)
    fetch('/vision', {
      method: 'POST',
      header: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ url }),
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      this.setState({
        visionText: data.description.captions[0].text
      })
    })
    .catch(err => console.log(err))
  }

  getRoverImages(){
    fetch(`/rover`)
    .then(r => r.json())
    .then((data) => {
      console.log('$$$$$$', data.photos[1].img_src)
      this.setState({
        roverImage: data.photos[3].img_src,
        visionText: 'Click me'
      })
    })
    .catch(err => console.log(err))
  }

  getVision(){
    fetch(`/vision`)
    .then(r => r.json())
    .then((data) => {
      console.log('$$$$$$', data)
      this.setState({
        visionText: data
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="app-container">
        <h1>Hello Mars</h1>
        <div className="image-container">
          <Rover
            roverData={this.state.roverImage}
            getRoverImages={this.getRoverImages.bind(this)}
          />
          <Bing
            bingImage={this.state.bingImage}
          />
        </div>
        <Vision
          visionText={this.state.visionText}
          roverImage={this.state.roverImage}
          getVisionData={this.getVisionData.bind(this)}
        />
        <button>Refresh</button>
      </div>
    );
  }
}

export default App;
