import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
<<<<<<< Updated upstream
import Home from '../components/home'

||||||| merged common ancestors
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';

/**
 * this class loads all the required components for this project
 */
=======
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import '../css/style.css';
/**
 * this class loads all the required components for this project
 */
>>>>>>> Stashed changes
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
