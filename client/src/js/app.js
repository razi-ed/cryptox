import React, { Component } from 'react';
import { render } from 'react-dom';



export default class Hello extends Component {
  render() {
    return (
      <h1>
      Hello world</h1>
    );
  }
}



render( < Hello / > , document.getElementById('app'));