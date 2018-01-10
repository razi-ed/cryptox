import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
<<<<<<< HEAD

import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import '../css/style.css';
/**
 * this class loads all the required components for this project
 */
||||||| merged common ancestors
import Home from '../components/home'
=======
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
>>>>>>> authentication

/**
 * this class loads all the required components for this project
 */
export default class App extends React.Component {
  /**
   * this function is called by React to render components
   * @return {component}
   */
  render() {
    return (
      <BrowserRouter>
        <div>
      <Header/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/login'} component={LogIn}/>
      <Route exact path={'/reset-password'} component={ForgotPassword}/>
      <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}
