import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
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
      real: [ 'USD', 'EUR', 'JPY', 'GBP'],
      BTC: 0, ETH: 0, XRP: 0, LTC: 0, DASH: 0, USD:0, EUR:0, JPY:0, GBP:0
    };
  }
  getCrypto = async () =>{
    console.log('get crpto');
    try{
      const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=15');
      const currencies = await response.json();
      this.state.crypto.forEach(Rcurrency=>{
        currencies
          .filter(currency=>currency.symbol==Rcurrency)
          .forEach(crypto=>this.setState({[crypto.symbol]:Number(crypto.price_inr)}))
      })
    } catch(e){
      console.log('error',e);
    } finally{
      console.log('done')
    }
  }
  getReal = async () =>{
    console.log('get real');
    try{
      const response = await fetch('https://api.fixer.io/latest?base=INR');
      const currencies = await response.json();
      this.state.real.forEach(Rcurrency=>{
        this.setState({ [Rcurrency]: currencies.rates[Rcurrency]})
      })
    } catch(e){
      console.log('error',e);
    } finally{
      console.log('done')
    }
  }
  componentDidMount () {
     setInterval(()=>{
      this.getCrypto();
      this.getReal();
    },15000);
  }
  render() {
    return (
      <Grid className="list" item={true}  xs={10} md={5} alignItems='center'>
      <Paper className='List' >
          {this.state.crypto.map(coin => <Currency name={coin} type='digital' price={this.state[coin] } />)}
          {this.state.real.map(coin => <Currency name={coin}type='real' price={1 / this.state[coin]}/>)}
      </Paper>
      </Grid>
    );
  }
}
