import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import * as ReactRedux from 'react-redux';

/**
 * @class
 */
export default class WalletBalance extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @method
   * @return {html}
   */
  render() {
    return (

      <div className='user-profile'>
        <Grid spacing={0} container justify='center'>
        <Paper>
          <Typography type = 'body1'>
            Wallet Balances
          </Typography>
        </Paper>

        </Grid>
      </div>
    );
  }
}
