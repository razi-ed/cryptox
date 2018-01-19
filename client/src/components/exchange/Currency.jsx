import React from 'react';

import {Paper, Typography} from 'material-ui';
import ChangeArrow from './change-arrow';
/**
 *  creates a material card class to display currency
 *@param {props} props
 * @return {component}
**/
const Currency =(props)=> (
    <Paper style={{display: 'flex', width: '85'}} className='currency'>
      <div className='currency-card'
      style={{display: 'flex',
      justifyContent: 'space-around', width: '100%', alignItems: 'center'}}>
        <Typography type="title" color='secondary' >
         {props.name }
        </Typography>
        <ChangeArrow type={props.type} change={props.change}>
        </ChangeArrow>
        <Typography type="title" color='secondary' >
          {typeof(props.price)==='number'?(props.price).toFixed(2)
          :'loading'}{props.baseCurrency}
        </Typography>
      </div>
    </Paper>
  );


export default Currency;
