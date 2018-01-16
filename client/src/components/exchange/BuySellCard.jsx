import React from 'react';

import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
/**
 *@return {component} BuySellCard which will be common in both buy and sell tabs
 */

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
const units=[1,0.1,0.001]
class BuySellCard extends React.Component {
  constructor(){
    super();
    this.state={
      currency: 'USD',
      trade:'USD',
      base:'INR',
      units:1,
      quantity:1
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  componentDidMount(){
   
  }
  render() {
    return (
      <Card raised className='BuySellCard' style={{marginTop:5}}>
        <CardMedia
          style={{
          height: 150,
        }}
          image="https://blink.ucsd.edu/_images/homepage/landing-pages/buy-cart.png"
          title="Contemplative Reptile"/>
        <CardContent 
          className='trade'
        >
          {/* <Typography type="headline" component="h2">
            Lizard
          </Typography> */}
        <TextField
          id="select-currency"
          select
          label="base currency"
          value={this.state.currency}
          onChange={this.handleChange('base')}

          helperText="from"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-currency"
          select
          label="trade for"
          value={this.state.trade}
          onChange={this.handleChange('trade')}
          helperText="to"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-currency"
          select
          label="units"
          value={this.state.units}
          onChange={this.handleChange('units')}
          helperText="Please select units"
          margin="normal"
        >
          {units.map((option,index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          <Input
            id="quantity"
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
          />
        
        </CardContent>
        <Typography type="display1"  style={{display: 'flex',justifyContent: 'center'}} >
          {this.state.units * this.state.quantity}  {this.state.trade} converts to
          {this.state.base}
        </Typography>
        <CardActions style={{display:'flex',justifyContent:'space-around'}}>
          <Button raised color="primary" style={{width:80}}>
            BUY
          </Button>
          <Button raised color="primary" style={{width:80}}>
            SELL
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default BuySellCard;
