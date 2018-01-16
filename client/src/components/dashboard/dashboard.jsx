import React from 'react';
import Grid from 'material-ui/Grid';
import Currency from './Currency';
import UserProfile from './UserProfile';
// import history from '../history';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
/**
 * this class creates Dashboard component
 */
class Dashboard extends React.Component {
    /**
   * @method
   */
  componentDidMount() {
    // if (localStorage.getItem('token')) {
    //   fetch('/profile', {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': localStorage.getItem('token'),
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   }).then((res) => {
    //     return res.json();
    //   }).then((res) => {
    //     console.log(res);
    //     this.setState({
    //       email: res.email,
    //       name: res.name,
    //     });
    //   }).catch((error) => {
    //     this.props.history.push('/login');
    //   });
    // } else {
    //   this.props.history.push('/login');
    // }
    this.props.dispatch({type: 'GET_TOKEN'});
  }
  /**
   * this renders the component
   * @return {component}
   */
  render() {
    // console.log(this.state.name, this.state.email);
    console.log(this.props.state);

    return (
      <div className='currency-container'>
      <Grid className='user-profile-container' container>
      <UserProfile />
      </Grid>
      {/* <Grid className='currency-panel' container spacing={0}>
      <Currency currency = 'bitcoin'/>
      <Currency currency = 'ethereum'/>
      <Currency currency = 'ripple'/>
      <Currency currency = 'litecoin'/>
      <Currency currency = 'dash'/>
    </Grid>*/}
      </div>
    );
  };
};

const DashboardWithRouther = withRouter(Dashboard);

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const ConnectedDashboard = connect(mapStateToProps)(DashboardWithRouther);

export default ConnectedDashboard;
;
