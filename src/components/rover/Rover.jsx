import React, { Component } from 'react';
import Style from './Rover.css';

export default class Rover extends Component{

  componentWillMount() {
    this.props.getRoverImages();
  }

  render(){
    console.log(this.props)

    return (
      <div className="rover-container">
        <img src={this.props.roverData[0].img_src} alt=""/>
      </div>
    );
  }
}
