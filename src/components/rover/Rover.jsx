import React, { Component } from 'react';
import Style from './Rover.css';

export default class Rover extends Component{

  componentWillMount() {
    this.props.getRoverImages();
  }

  render(){
    console.log('^^^^^^^^', this.props.roverData)

    return (
      <div className="rover-container">
        <img src={this.props.roverData.photos[0].img_src} alt=""/>
      </div>
    );
  }
}
