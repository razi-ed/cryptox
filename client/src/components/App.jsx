import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LogIn from './auth/TabForSignUp';
import Header from './Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import Dashboard from '../components/dashboard/dashboard';
import Exchange from '../components/exchange/exchange';
import Store, {History} from '../js/redux/store';
import {lightBlue, red} from 'material-ui/colors';
import Reboot from 'material-ui/Reboot';
import {withTheme, createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import * as TradeActions from '../js/redux/actions/buySellActionsCreator';
import {getCrypto, getReal} from '../../utils/getCurrencies';
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
   *this function is called by React to render components
   */
  componentDidMount() {
    getCrypto(this.props);
    getReal(this.props);
    setInterval(() => {
      getCrypto(this.props);
      getReal(this.props);
    }, 10000);
  }
  /**
   *@return {component}
   */
  render() {
    console.log(this.props);
    return (
      <BrowserRouter history={History}>
        <MuiThemeProvider theme={theme}>
          <Reboot/>
          <div>
            <Header/>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/login'} component={LogIn}/>
            <Route exact path={'/reset-password'} component={ForgotPassword}/>
            <Route exact path={'/dashboard'} component={Dashboard}/>
            <Route exact path={'/exchange'} component={Exchange}/>
            <Route exact path={'/exchange/:type/:coin'} component={Exchange}/>
            <Footer/> {/* <Footer/>*/}
          </div>
        </MuiThemeProvider>
      </BrowserRouter>

    );
  }
}

// export default withTheme(theme)(App);
const mapStateToProps = state => state.Exchange;

const mapDispatchToProps =
dispatch => bindActionCreators(TradeActions, dispatch);
const ReduxedApp =
connect(mapStateToProps, mapDispatchToProps)(withTheme(theme)(App));

export default ReduxedApp;
