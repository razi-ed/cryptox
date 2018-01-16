import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import {Store} from '../js/redux/store';
import {Provider} from 'react-redux';

Store.subscribe(() => {
  Store.getState();
});

Store.dispatch({type: 'ACTION_TYPE', payload:{}});

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
      <Provider store={Store}>
      <BrowserRouter history={history}>
        <div>
      <Header/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/login'} component={LogIn}/>
      <Route exact path={'/reset-password'} component={ForgotPassword}/>
      <Footer/>
      </div>
    </BrowserRouter>
    </Provider>
    );
  }
}
