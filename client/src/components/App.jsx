import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LogIn from './auth/TabForSignUp';
import Header from './header/Header';
import Home from './homePage/Home';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import Exchange from '../components/exchange/Exchange';
import Dashboard from '../components/dashboard/Dashboard';
import EditDetails from '../components/dashboard/EditDetails';
import Store, {History} from '../store';
import {lightBlue, red} from 'material-ui/colors';
import Reboot from 'material-ui/Reboot';
import {withTheme, createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import * as TradeActions from '../actions/buySellActionsCreator';
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
    setInterval(() => {
      getCrypto(this.props);
      getReal(this.props);
    }, 15000);
  }
  /**
   *@return {component}
   */
  render() {
    return (
      <BrowserRouter history={History}>
        <MuiThemeProvider theme={theme}>
        <Reboot/>
        <div>
      <Header/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/login'} component={LogIn}/>
      <Route exact path={'/reset-password'} component={ForgotPassword}/>
      <Route exact path={'/dashboard'} render={()=> {
        return (<Dashboard exchange={this.props}
         dispatch={this.props.updatePrice}/>);
      }}/>
      <Route exact path={'/edit-profile'} component={EditDetails}/>
      <Route exact path={'/exchange'} component={Exchange}/>
      <Route exact path={'/exchange/:type/:coin'} component={Exchange}/>
      <Footer/>
      </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => state.exchange;

const mapDispatchToProps =
dispatch => bindActionCreators(TradeActions, dispatch);
const ReduxedApp =
connect(mapStateToProps, mapDispatchToProps)(withTheme(theme)(App));

export default ReduxedApp;
