import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
import Home from '../components/Home';
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
      </div>
    </BrowserRouter>
    );
  }
}
