import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import red from 'material-ui/colors/red';
import Reboot from 'material-ui/Reboot';
import {withTheme} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
  },
  status: {
    danger: 'orange',
    contrast: 'white',
  },
});


/**
 * this class loads all the required components for this project
 */
class App extends React.Component {
  /**
   * this function is called by React to render components
   * @return {component}
   */
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
        <Reboot />
        <div>
          {/* <Header />*/}
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={LogIn}/>
          <Route exact path={'/reset-password'} component={ForgotPassword}/>
      {/* <Footer/>*/}
      </div>
        </MuiThemeProvider>
    </BrowserRouter>
    );
  }
}

export default withTheme(theme)(App);
