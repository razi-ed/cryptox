import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';

import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import '../css/style.css';
/**
 * this class loads all the required components for this project
 */

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
