import React, { Component } from 'react';
import Style from './Bing.css';

export default class Form extends Component{
  render(){
    console.log(this.props.visionText)
    console.log(this.props.bingImage)

    return (
      <div className="bing-container">  
        <img src={this.props.bingImage} alt=""/>
        <button className="bing-button" onClick={() => {this.props.getBingImage(this.props.visionText)}}>Get Bing Image</button>
      </div>
    );
  }
}