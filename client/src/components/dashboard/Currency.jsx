import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

/**
 * Return the component with details of
 * crypto currency and latest price of that thing
 * @class
 */
export default class Currency extends React.Component {
  /**
   * @method
   * @return {Currencycard}
   */
  render() {
    return (
      <Grid item spacing={0} xs={12} sm={6} md={2} lg={2}>
        <Paper className='currency'>
        <div>{this.props.type}</div>
        <div>{this.props.price}</div>

        </Paper>
      </Grid>
  );
  }
}

