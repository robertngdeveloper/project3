import React, { Component } from 'react';
import Style from './SavedImages.css';

// Create react components to pass through the props
export default class Rover extends Component{

// function to run on reload
  componentWillMount() {
    this.props.getSavedImages();
  }

  render(){
    return (
      <div>
        <h3>Saved Images</h3>
        {this.props.savedImages}
      </div>
    );
  }
}
