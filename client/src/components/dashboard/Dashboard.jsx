import React from 'react';
import Grid from 'material-ui/Grid';
import {Currency} from './Currency';
import UserProfile from './UserProfile';
import {withRouter} from 'react-router-dom';
import WalletBalances from './WalletBalances';
import * as ReactRedux from 'react-redux';
import {getUserDetails} from '../../actions/dashboardActionsCreator';
import LogOutIcon from 'material-ui-icons/PowerSettingsNew';
/**
 * this class creates Dashboard component
 */
class Dashboard extends React.Component {
  /**
   * @method
   */
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.dispatch(getUserDetails(localStorage.getItem('token'),
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
    return (
      <div className='dashboard-container'>
      {/* <LogOutIcon style={{float: 'left'}}/> */}
      <Grid className='user-profile-container' container spacing={0}>
      <UserProfile />
      <WalletBalances />
      </Grid>
      <Grid className='currency-panel' container spacing={0}>
      {/* <Currency currency = 'bitcoin'/>
      <Currency currency = 'ethereum'/>
      <Currency currency = 'ripple'/>
      <Currency currency = 'litecoin'/>
      <Currency currency = 'dash'/> */}
      {this.props.exchange.crypto.map((crypto) => {
        return <Currency key={crypto}
         type={crypto}
         price={this.props.exchange[crypto].price}
         baseCurrency={this.props.exchange.baseCurrency}
         history= {this.props.history}/>;
      })}
    </Grid>
      </div>
    );
  };
};

const DashboardWithRouter = withRouter(Dashboard);
const mapStateToProps = (state) => {
  return {
    state: state.user,
  };
};

const ConnectedDashboard =
  ReactRedux.connect(mapStateToProps)(DashboardWithRouter);

export default ConnectedDashboard;

