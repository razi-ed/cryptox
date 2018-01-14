import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Menu, { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Grow from 'material-ui/transitions/Grow';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary[500],
      '& $text, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  text: {},
  icon: {},
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'spaceBetween'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  popperClose: {
    pointerEvents: 'none',
  },
});



/**
 * this class creates Header section for this project
 */
class Header extends React.Component {
  /**
   * this function is called by React to render the component
   * @return {component}
   */
  state = {
    auth: true,
    anchorElement: null,
    open: false,
  };

  /*constructor(props) {
  const { classes } = props;
//P.S.  
}*/

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  // handleMenu = event => {
  //   this.setState({ anchorElement: event.currentTarget });
  // };

  // handleClose = () => {
  //   this.setState({ anchorElement: null });
  // };

  render() {
    const { classes } = this.props;
    const { auth, anchorElement } = this.state;
    const openSecMenu = Boolean(anchorElement);
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon style={{ fontSize: 36, color:'#fff' }}/>
            </IconButton>
            <Typography type="title" style={{ fontSize: 32, color: '#fff' }} className={classes.flex}>
              CRYPTOX
            </Typography>
    {/* {auth && (  */}
            <Manager>
              <Target>
                <IconButton
                  aria-owns={open ? 'menu-list' : null}

                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <AccountCircle style={{ fontSize: 36, color: '#fff' }} />

                </IconButton>
              </Target>
              <Popper
                placement="bottom-start"
                eventsEnabled={open}
                className={classNames({ [classes.popperClose]: !open })}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </Popper>
            </Manager>
            {/*    )}*/}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);