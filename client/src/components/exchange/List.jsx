import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TradeActions from '../../js/redux/actions/buySellActionsCreator';

import {Grid, Paper} from 'material-ui';


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
      baseCurrency: 'INR',
    };
  }
  getCrypto = async () => {
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${this.props.Exchange.baseCurrency}&limit=15`);
      const currencies = await response.json();
      // console.log(currencies);
      this
        .props
        .Exchange
        .crypto
        .forEach(Rcurrency => {
          currencies
            .filter(currency => currency.symbol == Rcurrency)
            .forEach(crypto => this.props.updatePrice([crypto.symbol], {
              price: Number(crypto[
                `price_${this
                  .state
                  .baseCurrency
                  .toLowerCase()}`
              ]),
              change: crypto.percent_change_1h,
            }));
            // this.props.updatePrice('BTC', this.state.BTC);
        });
    } catch (e) {
      console.log('error', e);
    }
  }
  getReal = async () => {
    try {
      const response = await fetch(`https://api.fixer.io/latest?base=${this.props.Exchange.baseCurrency}`);
      const currencies = await response.json();
      this
        .props
        .Exchange
        .real
        .filter(currency => currency !== this.props.Exchange.baseCurrency)
        .forEach(Rcurrency => {
          this.props.updatePrice([Rcurrency], currencies.rates[Rcurrency]);
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
        this.props.updatePrice([base], 1);
        this.getCrypto();
        this.getReal();
      });
    });
  }
  /**
   *methods to initaite the state when component is mounted
   */
  componentDidMount() {
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
            .props
            .Exchange
            .crypto
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='digital'
              price={this.props.Exchange[coin].price}
              change={this.props.Exchange[coin].change}
              baseCurrency=
              {this.props.base || this.props.Exchange.baseCurrency}/>)}
          {this
            .props
            .Exchange
            .real
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='real'
              price={1 / this.props.Exchange[coin]}
              baseCurrency=
              {this.props.base || this.props.Exchange.baseCurrency}/>)}
        </Paper>
      </Grid>
    );
  }
}
const mapStateToProps=state=> state;


  const mapDispatchToProps=dispatch=>bindActionCreators(TradeActions, dispatch);

const SList=connect(mapStateToProps, mapDispatchToProps)(List);

export default SList;
