import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LogIn from './auth/TabForSignUp';
import Header from './Header';
import Home from './Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import {lightBlue, red} from 'material-ui/colors';
import Reboot from 'material-ui/Reboot';
import {withTheme, createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
    contrast: '#FFFFFF',
  },
  status: {
    danger: 'orange',
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
          <Header />
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
