import React, { Component } from 'react';
import Style from './Bing.css';

export default class Form extends Component{
  render(){
    console.log(this.props.visionText)
    console.log(this.props.bingImage)

    return (
<<<<<<< HEAD
      <div className="bing-container">  
=======
      <div className="bing-container">
>>>>>>> master
        <img src={this.props.bingImage} alt=""/>
        <button className="bing-button" onClick={() => {this.props.getBingImage(this.props.visionText)}}>Get Bing Image</button>
      </div>
    );
  }
}