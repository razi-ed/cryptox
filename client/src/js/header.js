import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}