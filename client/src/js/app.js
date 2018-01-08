import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import { render } from 'react-dom';
import LogIn from './tabForSignUp';
import Header from './header';
import '../css/style.css';
import Login from './login';
import '../css/style.css';
import Footer from './footer';
import Home from '../components/home';
import '../css/style.css';
import ForgetPassword from './forgetPassword';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
      <Header/>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/login"} component={LogIn}/>
      <Route exact path={"/reset-password"} component={ForgetPassword}/>
      <Footer />
      </div>
    </BrowserRouter>
        
    );
  }
}



render( < App /> , document.getElementById('app'));
