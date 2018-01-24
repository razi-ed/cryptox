import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import {Link} from 'react-router-dom';
import SignUpIcon from 'material-ui-icons/AddCircleOutline';
import AboutUsIcon from 'material-ui-icons/InfoOutline';
import LogInIcon from 'material-ui-icons/PowerSettingsNew';
import ExchangeIcon from 'material-ui-icons/ShowChart';

export const mailFolderListItems = (
  <div>
    <Link to='/login'>

    <ListItem button>
      <ListItemIcon>
        <SignUpIcon />
      </ListItemIcon>
      <ListItemText primary="Sign up" />
    </ListItem>
</Link>
    <Link to='/login'>
    <ListItem button>
      <ListItemIcon>
        <LogInIcon />
      </ListItemIcon>
      <ListItemText primary="Log in" />
    </ListItem>
    </Link>

        <Link to='/exchange'>
    <ListItem button>
      <ListItemIcon>
        <ExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Exchange" />
    </ListItem>
    </Link>

    </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AboutUsIcon />
      </ListItemIcon>
      <ListItemText primary="About us" />
    </ListItem>
  </div>
);
