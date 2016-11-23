import React, { Component } from 'react';
import Style from './Bing.css';

export default class Form extends Component{
  render(){
    console.log(this.props)

    return (
      <div className="bing-container">
        <img src={this.props.bingImage} alt=""/>
      </div>
    );
  }
}
