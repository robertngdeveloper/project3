import React, { Component } from 'react';

// Create react components to pass through the props
export default class Vision extends Component{
  render(){
    return (
      <div id="vision-container">
        <div className="vision-button" onClick={() => {this.props.getVisionData(this.props.roverImage)}}>{this.props.visionText}</div>
      </div>
    );
  }
}
