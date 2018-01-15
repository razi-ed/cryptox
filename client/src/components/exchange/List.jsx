import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import BaseCurrency from './BaseCurrency';
import Currency from './Currency';
/**
 * this class creates a component of list of currencies
 */
export default class List extends React.Component {
   /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state={
      crypto: ['BTC', 'ETH', 'XRP', 'LTC', 'DASH'],
      real: ['INR','USD', 'EUR', 'JPY', 'GBP'],
      changeCrypto: [],
      BTC: 0, ETH: 0, XRP: 0, LTC: 0, DASH: 0,INR:1, USD: 0, EUR: 0, JPY: 0, GBP: 0,
      baseCurrency: 'INR',
    };
  }
  getCrypto = async () =>{
    // console.log('get crpto');
    try {
      const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=15');
      const currencies = await response.json();
      // console.log(currencies);
      this.state.crypto.forEach(Rcurrency=>{
        currencies
          .filter(currency=>currency.symbol==Rcurrency)
          .forEach(crypto=>
            this.setState({[crypto.symbol]: {
              price: Number(crypto.price_inr),
              change: crypto.percent_change_1h,
            }}));
      });
    } catch (e) {
      console.log('error', e);
    } finally {
      // console.log('done');
    }
  }
  getReal = async () =>{
    // console.log('get real');
    try {
      const response = await fetch('https://api.fixer.io/latest?base=INR');
      const currencies = await response.json();
      this.state.real.forEach(Rcurrency=>{
        this.setState({[Rcurrency]: currencies.rates[Rcurrency]});
      });
    } catch (e) {
      console.log('error', e);
    } finally {
      //  console.log('done');
    }
  }
  /**
   * this function executes when the component mounts
   */
  componentWillReceiveProps(){
    const base=this.props.base|| 'INR';
    this.setState({baseCurrency:base},()=>{
      console.log(`changed base currency to ${this.state.baseCurrency}`);
    })
  }
  componentDidMount() {
    this.getCrypto();
    this.getReal();
    
  };
  /**
   *this method renders the component
   *@return {component}
   */
  render() {
    
    //console.log(this.state,"state");
    
    return (
      <Grid className="list"  item container xs={10} md={5} alignItems='center'>
      <BaseCurrency {...this.props}/>
      <Paper className='List' >
          {this.state.crypto.map(coin =>
             <Currency name={coin}
              type='digital'
              price={this.state[coin].price }
              change={this.state[coin].change }
              baseCurrency={this.props.base||this.state.baseCurrency}
              />)}
          {this.state.real.map(coin =>
             <Currency name={coin}
             type='real'
             price={1 / this.state[coin]}
             baseCurrency={this.props.base||this.state.baseCurrency}
             />)}
      </Paper>
      </Grid>
    );
  }
}
