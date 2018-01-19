import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TradeActions from '../../js/redux/actions/buySellActionsCreator';

import {Grid, Paper} from 'material-ui';


import BaseCurrency from './BaseCurrency';
import Currency from './Currency';

import {getReal, getCrypto} from '../../../utils/getCurrencies';
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
   componentInit = () => {
    const base = this.props.base || 'INR';
    // console.log('component mounted',{[base]:1});
    this.setState({
      baseCurrency: base,
    }, () => {
        this.props.updatePrice(`${[base]}`, 1);
        this.props.updatePrice('baseCurrency', base);
        getCrypto(this.props);
        getReal(this.props);
      });
    };
  /**
   *methods to initaite the state when component is mounted
   */
  componentDidMount() {
    setInterval(() => {
      if (this.props.baseCurrency !== this.props.base) {
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
