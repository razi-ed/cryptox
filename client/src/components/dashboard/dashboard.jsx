import React from 'react';
import Grid from 'material-ui/Grid';
import Currency from './Currency';
import UserProfile from './UserProfile';
/**
 * this class creates Dashboard component
 */
export default class Dashboard extends React.Component {
   /**
   * this renders the component
   * @return {component}
   */
  render() {
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
