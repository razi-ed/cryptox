import React from 'react';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
/**
 *  creates a material card class to display currency
**/
export default class Currency extends React.Component {
/**
 *@returns
*/
render() {
  return (
    <Paper style={{display: 'flex'}}>
      <Typography type="headline" component="h2" className='currency'>
            headline
      </Typography>
    </Paper>
  );
};
};
