import React from 'react';
import { render } from 'react-dom';
import SignUp from './signup';
import Header from './header';
import '../css/style.css'


import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { render } from 'react-dom';
import Login from './login';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SignUp/>
        <Login/>
        {/* <Footer/> */}
      </div>
    );
  }
}



render( < Hello /> , document.getElementById('app1'));
