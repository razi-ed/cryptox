import React from 'react';
import Grid from 'material-ui/Grid';
import Currency from './Currency';
import UserProfile from './UserProfile';
// import history from '../history';
import {withRouter} from 'react-router-dom';
import WalletBalances from './WalletBalances';
import * as ReactRedux from 'react-redux';
import {getUserDetails} from '../../js/redux/actions/dashboardActionsCreator';
import {isUserAuthenticated} from '../../js/redux/actions/dashboardActionsCreator';
import LogOutIcon from 'material-ui-icons/PowerSettingsNew';
/**
 * this class creates Dashboard component
 */
class Dashboard extends React.Component {
  /**
   * @method
   */
  componentDidMount() {
    console.log(this.props);
    if (localStorage.getItem('token')) {
      /* fetch('/profile', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
        return res.json();
      }).then((res) => {
        console.log(res);
        this.props.dispatch(getUserDetails(res.email, res.name));
      }).catch((error, res) => {
        console.log(error);
        return error;
      }); */
      this.props.dispatch(isUserAuthenticated(localStorage.getItem('token'),
       this.props.history));
    } else {
      this.props.history.push('/login');
    }
  }
  /**
   * this renders the component
   * @return {component}
   */
  render() {
    console.log(this.props.state);

    return (
      <div className='currency-container'>
      {/* <LogOutIcon style={{float: 'left'}}/> */}
      <Grid className='user-profile-container' container>
      <UserProfile />
      <WalletBalances />
      </Grid>
      <Grid className='currency-panel' container spacing={0}>
      <Currency currency = 'bitcoin'/>
      <Currency currency = 'ethereum'/>
      <Currency currency = 'ripple'/>
      <Currency currency = 'litecoin'/>
      <Currency currency = 'dash'/>
    </Grid>
      </div>
    );
  };
};

const DashboardWithRouter = withRouter(Dashboard);
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const ConnectedDashboard =
  ReactRedux.connect(mapStateToProps)(DashboardWithRouter);

export default ConnectedDashboard;

