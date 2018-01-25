import React from 'react';
import {Paper, Typography} from 'material-ui';

export const UserItem=(props)=>(
  <div className="user" style={{margin: 5, padding: 2, width: '60%'}}>
    <Paper>
      <Typography type={'display1'} color={'secondary'}>
        {props.name}
      </Typography>
      <Typography type={'title'} color={'secondary'}>
        {props.email}
      </Typography>
    </Paper>
  </div>
);
