import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import { render } from 'react-dom';
import LogIn from './tabForSignUp';
import Header from './header';
import '../css/style.css';
import Login from './login';
import Footer from './footer';
import Home from '../components/home'


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
      <Header/>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/login"} component={LogIn}/>
      <Footer />
      </div>
        
    </BrowserRouter>
        
    );
  }
}

render( < App /> , document.getElementById('app'));
