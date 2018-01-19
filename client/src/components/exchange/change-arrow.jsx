import React from 'react';
import {ArrowUpward, ArrowDownward} from 'material-ui-icons';
import Typography from 'material-ui/Typography';
/**
 * this components returns change percentage and arrow direction accordingly
 *  @param {props} props
 *  @return {component}
 */
const ChangeArrow =(props)=> {
  /**
   * this return a stateless component
   */
  if (props.type=='digital') {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography type="title" color='inherit'>
          {props.change!=='undefined'?`${Math.abs(props.change)}%`:'loading'}
        </Typography >
        {props.change>0?
          <ArrowUpward style={{color: 'green'}}/>:
          <ArrowDownward style={{color: 'red'}}/>}
      </div>
    );
  } else {
    return (<div/>);
  }
};

// console.log(ChangeArrow);

export default ChangeArrow;

