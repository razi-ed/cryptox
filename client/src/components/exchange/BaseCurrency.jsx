import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, List, ListItem, ListItemText, Hidden}
 from 'material-ui';
import {MoreVert} from 'material-ui-icons';

/**
 * a component that sets the base currency
 * @param {object} val
 */
class BaseCurrency extends React.Component {
  /**
   * this has all the methods and functions of the BaseCurrency component
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state={
      Rcurrencies: ['INR', 'USD', 'EUR', 'GBP', 'JPY'],
      Dcurrencies: ['BTC', 'ETH', 'XRP', 'LTC', 'DASH'],
      active: 'INR',
      isHidden: true,
    };
  }
  getCurrentValue=(val)=>{
   this.setState({active: val});
  };
  hideList=()=>{
    this.setState({isHidden: !this.state.isHidden});
  }
  /**
   *this will do inital actions when the component mounts
   */
  componentDidMount() {
    const active =this.props.base || 'INR';
    this.setState({active});
  }
  /**
   * @return {component} BaseCurrency
   */
  render() {
    return (
      <AppBar position="static" color="primary">
          <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography type="title" color="inherit">
              Base Currency
            </Typography>
            <Typography type='title' color="inherit"
             style={{display: 'flex', justifyContent: 'center'}}
             onClick={this.hideList}>
              {this.state.active}
              <MoreVert />
            </Typography>
          </Toolbar>
          <Hidden lgUp={this.state.isHidden} lgDown={this.state.isHidden}>
            <h2>Real currencies</h2>
            <List >
            {this.state.Rcurrencies.map(value => (
              <Link key={value} to={`/exchange/real/${value}`}>
                <ListItem key={value} onClick={() => {
                    this.getCurrentValue(value); this.hideList();
                    }} dense button >
                  <ListItemText primary={`${value}`} />
                </ListItem>
              </Link>
            ))}
            </List>
            <h2>Digital currencies</h2>
            <List >
            {this.state.Dcurrencies.map(value => (
              <Link key={value} to={`/exchange/digital/${value}`}>
                <ListItem key={value}
                onClick={() => this.getCurrentValue(value)}
                dense button >
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