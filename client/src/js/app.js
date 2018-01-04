import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { render } from 'react-dom';
import SignUp from './signup';
import Header from './header';
import Login from './login';
import '../css/style.css'

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



render( <App /> , document.getElementById('app1'));
