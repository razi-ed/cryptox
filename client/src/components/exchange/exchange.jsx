import React from 'react';
import Grid from 'material-ui/Grid';
import List from './List';
import {Chart} from './chart';
/**
 * this class creates Exchange component
 */
export default class Exchange extends React.Component {
   /**
   * this renders the component
   * @return {component}
   */
  render() {
    return (
      <Grid item spacing={0} justify={'space-around'} alignItems={'stretch'}
       container className="exchange">
        <List/>
        <Chart/>
      </Grid>
    );
  };
};
