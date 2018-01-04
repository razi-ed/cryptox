import React, { Component } from 'react';
import { render } from 'react-dom';
import SignUp from './signup';
import Header from './header';
import '../css/style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './login';
import '../css/style.css';
import Footer from './footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SignUp/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}



render( < App /> , document.getElementById('app'));
