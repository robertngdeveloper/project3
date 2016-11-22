import React, { Component } from 'react';
import './Bing.css';

export default class Form extends Component{
  render(){
    console.log(this.props)

    return (
      <div id="bing-container">
        <img src="http://www.cocoroselle.com/wp-content/uploads/2013/10/Coconut-Pie-Crust.jpg" alt=""/>
      </div>
    );
  }
}
