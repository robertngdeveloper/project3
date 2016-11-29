import React, { Component } from 'react';
import Style from './Rover.css';

// Create react components to pass through the props
export default class Rover extends Component{

  render(){
    return (
      <div className={this.props.roverContainer}>
        <img className={this.props.roverBox} src={this.props.roverData} alt="" onClick={() => this.props.getRoverImages()}/>
      </div>
    );
  }
}

