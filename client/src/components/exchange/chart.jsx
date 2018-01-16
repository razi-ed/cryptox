import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import BuySellCard from './BuySellCard';
import new1 from './chartData';

export class Chart extends React.Component {
  render() {
    return (
    <Grid item xs={12} md={6} alignItems='center' style={{marginTop: '2'}}>
      <Paper className='chart' elevation={4}>
        chart
      </Paper>
      <BuySellCard base={this.props.base}/>
    </Grid>
  );
  }
};
// module.exports= Chart;


