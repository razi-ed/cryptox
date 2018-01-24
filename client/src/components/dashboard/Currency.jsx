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
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      type: '',
      price: 0,
    };
    this.getCurrencyPrice = this.getCurrencyPrice.bind(this);
  }

  /**
   * @method
   * @param {currency} currency
   */
  getCurrencyPrice(currency) {
    fetch(`https://api.coinmarketcap.com/v1/ticker/${currency}/?convert=INR`)
    .then((res)=> res.json())
    .then((res) => {
      console.log(res[0]);
      this.setState({
        type: res[0].symbol,
        price: Number(res[0].price_inr),
      });
      console.log(this.state);
    });
  }
  /**
   * @method
   */
  componentDidMount() {
    // this.getCurrencyPrice(this.props.currency);
    setInterval(()=> {
      this.getCurrencyPrice(this.props.currency);
    }, 15000);
  }

  /**
   * @method
   * @return {Currencycard}
   */
  render() {
    return (
      <Grid item spacing={0} xs={12} sm={6} md={2} lg={2}>
      <Paper className='currency'>
      <div>{this.state.type}</div>
      <div>{this.state.price}</div>

      </Paper>
      </Grid>
  );
  }
}

