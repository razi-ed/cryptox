import React from 'react';

import {Card, CardActions, CardContent,
        CardMedia, Button, Typography, MenuItem,
        TextField, Input} from 'material-ui';

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
const units=[1, 0.1, 0.001];
/**
 * a component that renders buy-sell component
 * @param {object} name
 * @return {component}
 */
class BuySellCard extends React.Component {
  /**
   *constructor for BuySellcard component
   */
  constructor() {
    super();
    this.state={
      currency: 'USD',
      trade: 'USD',
      base: 'INR',
      units: 1,
      quantity: 1,
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  /**
   *@return {component} the JSX component of the class
   */
  render() {
    return (
      <Card raised className='BuySellCard' style={{marginTop: 5}}>
        <CardMedia
          style={{
          height: 150,
        }}
          image="https://blink.ucsd.edu/_images/homepage/landing-pages/buy-cart.png"
          title="Contemplative Reptile"/>
        <CardContent
          className='trade'
        >
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
          {units.map((option, index) => (
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
        <Typography type="display1"
        style={{display: 'flex', justifyContent: 'center'}} >
          {(this.state.units * this.state.quantity).toFixed(4)} {
            this.state.trade}
           converts to
          {this.state.base}
        </Typography>
        <CardActions style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button raised color="primary" style={{width: 80}}>
            BUY
          </Button>
          <Button raised color="primary" style={{width: 80}}>
            SELL
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default BuySellCard;
