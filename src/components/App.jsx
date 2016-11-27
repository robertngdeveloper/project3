// import the libs we need
import React, { Component } from 'react';
import './App.css';
import Bing from './bing/Bing.jsx';
import Vision from './vision/Vision.jsx';
import Rover from './rover/Rover.jsx';
import Refresh from '../images/Refresh.png';
import Crosshair from '../images/Inverse.png';

// create a React Component called _App_
class App extends Component {

  constructor() {
    super();

    this.state = {
      roverImage: Crosshair,
      searchImages: false,
      bingImage: Crosshair,
      visionText: '',
      Refresh: Refresh,
      counter: 0,
      roverBox: 'boxcrosshair',
      bingBox: 'boxcrosshair',
      roverContainer: 'rover-container',
      bingContainer: 'bing-container'
    }
  }

  getVisionData(url) {
    fetch('/vision', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ 'url': url }),
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      this.setState({
        counter: 2,
        visionText: data.description.captions[0].text,
        CrosshairHover: ''
      })
    })
    .catch(err => console.log(err))
  }

  getRoverImages(){
    fetch(`/rover`)
    .then(r => r.json())
    .then((data) => {
      // console.log('$$$$$$', data.photos[1].img_src)
      this.setState({
        roverBox: 'large-images',
        roverContainer: 'large-images-container',
        counter: 1,
        roverImage: data.photos[3].img_src,
        RoverImageHover: '',
        visionText: <img className="brighten" className="crosshair" src={Crosshair} alt="Click"/>
      })
    })
    .catch(err => console.log(err))
  }

  refreshPage(){
    this.setState({
      roverImage: Crosshair,
      searchImages: false,
      bingImage: Crosshair,
      visionText: '',
      Refresh: Refresh,
      counter: 0,
      roverBox: 'boxcrosshair',
      bingBox: 'boxcrosshair',
      roverContainer: 'bing-rover-container',
      bingContainer: 'bing-rover-container'
    })
  }

  getVision(){
    fetch(`/vision`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        visionText: data
      })
    })
    .catch(err => console.log(err))
  }

  getBingImage(string){
    fetch(`/bing`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ 'string': string }),
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        bingBox: 'large-images',
        bingContainer: 'large-images-container',
        bingImage: data.value[4].contentUrl,
        searchImages: true,
        BingImageHover: ''
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="app-container">
        <div className="image-container">
          <Rover
            roverContainer={this.state.roverContainer}
            roverBox={this.state.roverBox}
            counter={this.state.counter}
            roverData={this.state.roverImage}
            getRoverImages={this.getRoverImages.bind(this)}
          />
          <Bing
            bingContainer={this.state.bingContainer}
            bingBox={this.state.bingBox}
            counter={this.state.counter}
            visionText={this.state.visionText}
            bingImage={this.state.bingImage}
            getBingImage={this.getBingImage.bind(this)}
          />
          <div className="vision-container">
            <Vision
              counter={this.state.counter}
              visionText={this.state.visionText}
              roverImage={this.state.roverImage}
              getVisionData={this.getVisionData.bind(this)}
            />
          </div>
        </div>
        <div className="refreshButton" onClick={() => {this.refreshPage()}}>
          <img className="refreshImage" src={this.state.Refresh} alt="Refresh"/>
        </div>
      </div>
    );
  }
}

export default App;
