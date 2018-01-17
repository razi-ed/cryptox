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
import LogInIcon from 'material-ui-icons/PowerSettingsNew';
import SignUpIcon from 'material-ui-icons/AddCircleOutline';
import AboutUsIcon from 'material-ui-icons/InfoOutline';
import Divider from 'material-ui/Divider';
import Media from "react-media"

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary[500],
      '& $text, & $icon': {
        color: theme.palette.common.white,
      },
    },
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 12,
    paddingRight: 12,
  },
  text: {
    popperClose: {
      pointerEvents: 'none',
    },
    fontWeight: ['300'],
    fontSize: 14,
    letterSpacing: .9,
  },
  icon: { 
    marginRight: 0,
    width: 20,
    height: 20  
  },
  textLg: { letterSpacing: 1.4},
  iconLg: { marginRight: 5},
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
    marginRight: 5,
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
    this.state.open === false ? this.setState({ open: true }) : this.setState({ open: false })
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
          <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon style={{ fontSize: 26, color: '#fff' }} />
              </IconButton>
              )
              :
              (
                <IconButton className={classes.menuButton} 
                style={{ marginRight: 20 }}
                  aria-label="Menu">
                <MenuIcon style={{ fontSize: 32, color:'#fff' }}/>
                </IconButton>
              )
                }
                </Media>
            <Media query="(max-width: 599px)">
              {matches =>
                matches ? (
                  <Typography type="display1"
                    style={{
                      fontSize: 24,
                      fontWeight: ['300'],
                      letterSpacing: 4,
                      color: '#fff'
                    }}
                    className={classes.flex}>
                    CRYPTOX
            </Typography>
            )
            :
            (
              <Typography type="display1"
                style={{
                  fontSize: 30,
                  fontWeight: ['300'],
                  letterSpacing: 7,
                  color: '#fff'
                  }}
                className={classes.flex}>
                CRYPTOX
            </Typography>                  
          )
            }
            </Media>
            {/*
              #####ADD TOGGLE SWITCH FOR LOGOUT/LOGIN IN MOBILE VIEW, AFTER AUTHENTICATION
              ### state
              const state= {
              auth: true
            }
              ### state
              
              ### props
               handleChange = (event, checked) => {
                  this.setState({ auth: checked });
              };
              #### props
              <Media
              query="(max-width: 599px)"
              render={() => <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>}
            />
          */}
    {/* {auth && (  */}
            <Manager>
              <Target>
                <Media query={{ maxWidth: 599 }}>
                  {matches =>
                    matches ? (
                      <IconButton
                        aria-owns={open ? 'menu-list' : null}

                        aria-haspopup="true"
                        onClick={this.handleClick}
                      >
                        <AccountCircle style={{ fontSize: 26, color: '#fff' }} />

                      </IconButton>
                    ) : (
                        <IconButton
                          aria-owns={open ? 'menu-list' : null}

                          aria-haspopup="true"
                          onClick={this.handleClick}
                        >
                          <AccountCircle style={{ fontSize: 32, color: '#fff' }} />

                        </IconButton>
                      )
                  }
                </Media>
              </Target>
              <Popper
                placement="bottom-start"
                eventsEnabled={open}
                className={classNames({ [classes.popperClose]: !open })}
              > 
              <Media query={{ maxWidth: 599 }}>
              {matches =>
                matches ? (
                  <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                          <Paper>
                            <MenuList style={{
                              paddingBottom: 1,
                              paddingTop: 1
                            }}>
                            <Link to='/login'>
                              <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                  <SignUpIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ text: classes.text }} inset primary="Sign Up" />
                              </MenuItem>
                            </Link>
                              <Divider light style={{ height: .8 }} />
                             <Link to='/login'>
                              <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                  <LogInIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ text: classes.text }} inset primary="Log In" />
                              </MenuItem>
                              </Link>
                              <Divider style={{ height: 1 }} />
                              <Link to='/about'>
                              <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                  <AboutUsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ text: classes.text }} inset primary="About Us" />
                              </MenuItem>
                              </Link>
                            </MenuList>
                          </Paper>
                          </Grow>
                          </ClickAwayListener>
                        )
                        :
                        (
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                                              <Paper>
                              <MenuList style={{
                                paddingBottom: 1,
                                paddingTop: 1
                              }}>
                                <Link to='/login'>
                                <MenuItem className={classes.menuItem}>
                                  <ListItemIcon className={classes.iconLg}>
                                    <SignUpIcon />
                                  </ListItemIcon>
                                  <ListItemText classes={{ text: classes.textLg }} inset primary="Sign Up" />
                                </MenuItem>
                                </Link>
                                <Divider light style={{ height: 1.15 }} />
                                <Link to='/login'>
                                <MenuItem className={classes.menuItem}>
                                  <ListItemIcon className={classes.iconLg}>
                                    <LogInIcon />
                                  </ListItemIcon>
                                  <ListItemText classes={{ text: classes.textLg }} inset primary="Log In" />
                                </MenuItem>
                              </Link>
                                <Divider style={{ height: 1.25 }} />
                                <Link to='/about'>
                                <MenuItem className={classes.menuItem}>
                                  <ListItemIcon className={classes.iconLg}>
                                    <AboutUsIcon />
                                  </ListItemIcon>
                                  <ListItemText classes={{ text: classes.textLg }} inset primary="About Us" />
                                </MenuItem>
                                </Link>
                              </MenuList>
                            </Paper>
                  </Grow>
                </ClickAwayListener>                        
              )
                    }
                  </Media>
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