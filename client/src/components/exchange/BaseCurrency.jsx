import React from 'react';
import {Link} from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from
'material-ui/List';
import Hidden from 'material-ui/Hidden';
import {MoreVert  } from 'material-ui-icons';

/**
 * a component to chose a base currency
 */
class BaseCurrency extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Rcurrencies: ['INR', 'USD', 'EUR', 'GBP', 'JPY'],
      Dcurrencies: ['BTC', 'ETH', 'XRP', 'LTC', 'DASH'],
      active:'INR',
      isHidden:true
    }
  }
  getCurrentValue=(val)=>{
   this.setState({active:val})
  };
  HideList=()=>{
    this.setState({isHidden:!this.state.isHidden})
  }
  componentDidMount(){
    const active =this.props.base || 'INR'
    this.setState({active})
    
  }
  render() {
    return (
      <AppBar position="static" color="primary">
          <Toolbar style={{display:'flex', justifyContent: 'space-between'}}>
            <Typography type="title" color="inherit">
              Base Currency
            </Typography>
            <Typography type='title' color="inherit" style={{display:'flex',justifyContent:'center'}} onClick={this.HideList}>
              {this.state.active}
              <MoreVert />
            </Typography>
          </Toolbar>
          <Hidden lgUp={this.state.isHidden} lgDown={this.state.isHidden}>
            <h2>Real currencies</h2>
            <List >
            {this.state.Rcurrencies.map(value => (
              <Link to={`/exchange/real/${value}`}>
                <ListItem key={value} onClick={() => this.getCurrentValue(value)} dense button >
                  <ListItemText primary={`${value}`} />
                </ListItem>
              </Link>
            ))}
            </List>
            <h2>Digital currencies</h2>
            <List >
            {this.state.Dcurrencies.map(value => (
              <Link to={`/exchange/digital/${value}`}>
                <ListItem key={value} onClick={() => this.getCurrentValue(value)} dense button >
                  <ListItemText primary={`${value}`} />
                </ListItem>
              </Link>
            ))}
            </List>
        </Hidden>
        </AppBar>
    );
  }
};

export default BaseCurrency;
