import React from 'react';
import Grid from 'material-ui/Grid';
import List from './List';
import {RightPane} from './RightPane';
/**
 *to Hold all the required components required for exchange
 * @param {*} props
 * @return {component}
 */
const Exchange =(props)=> {
    const baseCurrency=props.match.params.coin||'INR';
    return (
      <Grid
        item
        spacing={0}
        justify={'space-around'}
        alignItems={'stretch'}
        container
        className="exchange">
        <List base={baseCurrency}/>
        <RightPane base={baseCurrency}/>
      </Grid>
    );
};
export default Exchange;
