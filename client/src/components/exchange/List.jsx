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
  }
  
  /**
   *methods to initaite the state when component is mounted
   */
 

  /**
   *this method renders the component
   *@return {component}
   */
  render() {
    return (
      <Grid className="list" item container xs={12} md={5} alignItems='center'>
        <BaseCurrency {...this.props}/>
        <Paper className='List'>
          {this
            .props
            .crypto
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='digital'
              price={this.props[coin].price}
              change={this.props[coin].change}
              baseCurrency=
              {this.props.baseCurrency }/>)}
          {this
            .props

            .real
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='real'
              price={1 / this.props[coin].price}
              baseCurrency=
              {this.props.baseCurrency }/>)}
        </Paper>
      </Grid>
    );
  }
}
const mapStateToProps=state=> state.exchange;
const mapDispatchToProps=dispatch=>bindActionCreators(TradeActions, dispatch);
const SList=connect(mapStateToProps, mapDispatchToProps)(List);

export default SList;
