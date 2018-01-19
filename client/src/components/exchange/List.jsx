import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TradeActions from '../../js/redux/actions/buySellActionsCreator';

import {Grid, Paper} from 'material-ui';


import BaseCurrency from './BaseCurrency';
import Currency from './Currency';


const List =(props)=> (
      <Grid className="list" item container xs={12} md={5} alignItems='center'>
        <BaseCurrency {...props}/>
        <Paper className='List'>
          {
            props
            .crypto
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='digital'
              price={props[coin].price}
              change={props[coin].change}
              baseCurrency=
              {props.baseCurrency }/>)}
          {
            props
            .real
            .map((coin, index) => <Currency
              name={coin}
              key={index}
              type='real'
              price={1 / props[coin].price}
              baseCurrency=
              {props.baseCurrency }/>)}
        </Paper>
      </Grid>
    );

const mapStateToProps=state=> state.exchange;
const mapDispatchToProps=dispatch=>bindActionCreators(TradeActions, dispatch);
const SList=connect(mapStateToProps, mapDispatchToProps)(List);

export default SList;
