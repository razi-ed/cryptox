import React from 'react';
import Paper from 'material-ui/Paper';
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
      style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
         <span>
         {this.props.name }
         </span>
         <span>
          {this.props.price}
         </span>
      </div>
    </Paper>
  );
};
};
