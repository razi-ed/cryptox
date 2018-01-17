import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ChangeArrow from './change-arrow';
/**
 *  creates a material card class to display currency
**/
export default class Currency extends React.Component {
/**
* this function renders the Currency component
* @return {component}
*/
render() {
  return (
    <Paper style={{display: 'flex', width: '85'}} className='currency'>
      <div className='currency-card'
      style={{display: 'flex',
      justifyContent: 'space-around', width: '100%', alignItems: 'center'}}>
        <Typography type="headline" gutterBottom>
         {this.props.name }
        </Typography>
        <ChangeArrow type={this.props.type} change={this.props.change}>
        </ChangeArrow>
        <Typography type="headline" gutterBottom>
          {typeof(this.props.price)==='number'?(this.props.price).toFixed(2)
          :'loading'}{this.props.baseCurrency}
        </Typography>
      </div>
    </Paper>
  );
};
};
