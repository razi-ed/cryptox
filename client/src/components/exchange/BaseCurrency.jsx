import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from
'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Hidden from 'material-ui/Hidden';
import { ArrowUpward, ArrowDownward } from 'material-ui-icons';

/**
 * a component to chose a base currency
 */
class BaseCurrency extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Rcurrencies: ['INR', 'USD', 'EUR', 'GBP', 'JPY'],
      Dcurrencies: ['ETC', 'ETH', 'XRP', 'LTC', 'DASH'],
      active:'INR'
    }
  }
  getCurrentValue=(val)=>{
   this.setState({active:val})
  };
  render() {
    return (
      <AppBar position="static" color="primary">
          <Toolbar style={{display:'flex', justifyContent: 'space-around'}}>
            <Typography type="title" color="inherit">
              Base Currency
            </Typography>
            <span>{this.state.active}</span>
          </Toolbar>
          <Hidden >
            <h2>Real currencies</h2>
            <List >
            {this.state.Rcurrencies.map(value => (
              <ListItem key={value} onClick={() => this.getCurrentValue(value)} dense button >
                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
            </List>
            <h2>Digital currencies</h2>
            <List >
            {this.state.Dcurrencies.map(value => (
              <ListItem key={value} onClick={() => this.getCurrentValue(value)} dense button >
                <ListItemText primary={`${value}`} />
              </ListItem>
            ))}
            </List>
        </Hidden>
        </AppBar>
    );
  }
};

export default BaseCurrency;
