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
        <Typography type="headline">
          {props.change!=='undefined'?`${Math.abs(props.change)}%`:''}
        </Typography >
        {props.change>0?<ArrowUpward/>:<ArrowDownward/>}
      </div>
    );
  } else {
    return (<div/>);
  }
};

// console.log(ChangeArrow);

export default ChangeArrow;

