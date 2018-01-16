import React from 'react';
import {Paper} from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';

import Buy from './Buy'
import Sell from './Sell'
export class BuySellTab extends React.Component{
  constructor(){
    super();
    this.state={
      value: 'buy',
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    const { value } = this.state;
    return(
      <Paper>
        <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value="buy" label="Buy" />
            <Tab value="sell" label="Sell" />
          </Tabs>
          {value === 'buy' && <Buy/>}
        {value === 'sell' && <Sell/>}
      </Paper>
    )
  }
}
export default BuySellTab;