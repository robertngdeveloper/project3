import React, { Component } from 'react';
import './Bing.css';

// Create react components to pass through the props
export default class Form extends Component{
  render(){

    return (
      <div className={this.props.bingContainer}>
        <img className={this.props.bingBox} src={this.props.bingImage} alt="" onClick={() => {this.props.getBingImage(this.props.visionText)}}/>
      </div>
    );
  }
}
