import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import BuySellCard from './BuySellCard';
import MyChart from './Chart';

/**
 *A container for 'Chart' and 'BuySell' component
 *@return {component} a grid container that holds Chart and BuySellCard
 */
const RightPane =()=> {
    return (
    <Grid item xs={12} md={6} alignItems='center'>
      <Paper className='chart' elevation={4} >
        <MyChart/>
      </Paper>
      <BuySellCard base={this.props.base}/>
    </Grid>
  );
};

export default RightPane;


