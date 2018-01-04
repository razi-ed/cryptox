
import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { render } from 'react-dom';
import Login from './login';

//import RadioButtonsGroup from './test'

export default class Hello extends Component {
  render() {
    return (
      <div>
      <Login/>
      </div>
    );
  }
}



render( < Hello /> , document.getElementById('app'));
