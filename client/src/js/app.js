import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { render } from 'react-dom';
import LogIn from './tabForSignUp';
import Header from './header';
import '../css/style.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <LogIn/>
        {/* <Footer/> */}
      </div>
    );
  }
}



render( <App /> , document.getElementById('app1'));
