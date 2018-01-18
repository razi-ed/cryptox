import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TradeActions from '../../js/redux/actions/buySellActionsCreator';

import {Grid, Paper} from 'material-ui';

const mapStateToProps=(state)=>{
return {
  ...state.Exchange,
};
};
const mapDispatchToProps=dispatch=>bindActionCreators(TradeActions, dispatch);

import BaseCurrency from './BaseCurrency';
import Currency from './Currency';
/**
 * this class creates a component of list of currencies
 */
class List extends React.Component {
  /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      crypto: [
        'BTC', 'ETH', 'XRP', 'LTC', 'DASH',
      ],
      real: [
        'INR', 'USD', 'EUR', 'JPY', 'GBP',
      ],
      BTC: 0,
      ETH: 0,
      XRP: 0,
      LTC: 0,
      DASH: 0,
      INR: 0,
      USD: 0,
      EUR: 0,
      JPY: 0,
      GBP: 0,
      baseCurrency: 'INR',
    };
  }
  getCrypto = async () => {
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${this.state.baseCurrency}&limit=15`);
      const currencies = await response.json();
      // console.log(currencies);
      this
        .state
        .crypto
        .forEach(Rcurrency => {
          currencies
            .filter(currency => currency.symbol == Rcurrency)
            .forEach(crypto => this.setState({
              [crypto.symbol]: {
                price: Number(crypto[
                  `price_${this
                    .state
                    .baseCurrency
                    .toLowerCase()}`
                ]),
                change: crypto.percent_change_1h,
              },
            }));
        });
    } catch (e) {
      console.log('error', e);
    }
  }
  getReal = async () => {
    try {
      const response = await fetch(`https://api.fixer.io/latest?base=${this.state.baseCurrency}`);
      const currencies = await response.json();
      this
        .state
        .real
        .filter(currency => currency !== this.state.baseCurrency)
        .forEach(Rcurrency => {
          this.setState({[Rcurrency]: currencies.rates[Rcurrency]});
        });
    } catch (e) {
      console.log('error', e);
    } finally {
      //  console.log('done');
    }
  }
  componentInit = () => {
    const base = this.props.base || 'INR';
    // console.log('component mounted',{[base]:1});
    this.setState({
      baseCurrency: base,
    }, () => {
      // console.log(`changed base currency to ${this.state.baseCurrency}`);
      this.setState({
        [base]: 1,
      }, () => {
        this.getCrypto();
        this.getReal();
      });
    });
  }
  /**
   *methods to initaite the state when component is mounted
   */
  componentDidMount() {
    this.componentInit();
    setInterval(() => {
      if (this.state.baseCurrency !== this.props.base) {
        this.componentInit();
      }
    }, 500);
  }

  /**
   *this method renders the component
   *@return {component}
   */
  render() {
    console.log(this.props, 'props');
    return (
      <Grid className="list" item container xs={12} md={5} alignItems='center'>
        <BaseCurrency {...this.props}/>
        <Paper className='List'>
          {this
            .state
            .crypto
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='digital'
              price={this.state[coin].price}
              change={this.state[coin].change}
              baseCurrency={this.props.base || this.state.baseCurrency}/>)}
          {this
            .state
            .real
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='real'
              price={1 / this.state[coin]}
              baseCurrency={this.props.base || this.state.baseCurrency}/>)}
        </Paper>
      </Grid>
    );
  }
}
const SList=connect(mapStateToProps, mapDispatchToProps)(List);

export default SList;
