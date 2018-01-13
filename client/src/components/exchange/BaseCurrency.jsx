import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from
'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Hidden from 'material-ui/Hidden';

const BaseCurrency=()=>{
  return (
    <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Base Currency
          </Typography>
        </Toolbar>
        <Hidden lgDown lgUp>
          <List >
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} dense button >
              <ListItemText primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox/>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          </List>
      </Hidden>
      </AppBar>
  );
};

export default BaseCurrency;
