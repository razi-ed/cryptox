import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import { render } from 'react-dom';
import LogIn from './TabForSignUp';
import Header from './Header';
import Home from '../components/home'
import '../css/style.css'
import Login  from './Login';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
      <Header/>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/login"} component={LogIn}/>
      </div>
    </BrowserRouter>
        
    );
  }
}



render( <App /> , document.getElementById('app1'));
