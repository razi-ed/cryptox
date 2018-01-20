import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Media from 'react-media';
import {Manager, Target, Popper} from 'react-popper';
import {AppBar, Button, Switch, Typography, Paper,
Menu, Divider,Drawer, Toolbar, List, MenuList, MenuItem,
ListItemIcon, ListItemText, IconButton} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import Grow from 'material-ui/transitions/Grow';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import SignUpIcon from 'material-ui-icons/AddCircleOutline';
import AboutUsIcon from 'material-ui-icons/InfoOutline';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import LogInIcon from 'material-ui-icons/PowerSettingsNew';
import AppBarDrawer from './header/drawer'
import { mailFolderListItems, otherMailFolderListItems } from './drawerList'

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as headerActions from '../js/redux/actions/headerActions';

const styles = (theme) => ({
  menuItem: {
    '&:focus': {
      'backgroundColor': theme.palette.primary[500],
      '& $text, & $icon': {
        color: theme.palette.common.white,
      },
    },
    'paddingTop': 11,
    'paddingBottom': 11,
    'paddingLeft': 12,
    'paddingRight': 12,
  },
  text: {
    popperClose: {
      pointerEvents: 'none',
      display: 'none',
    },
    fontWeight: ['300'],
    fontSize: 14,
    letterSpacing: .9,
  },
  icon: {
    marginRight: 0,
    width: 20,
    height: 20,
  },
  textLg: {letterSpacing: 1.4},
  iconLg: {marginRight: 5},
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'spaceBetween',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
  },
  list: {
    width: 200,
  },
});

/**
 * this class creates Header section for this project
 */
class Header extends React.Component {
  /**
   * this function is called by React to render the component
   * @param {object} props
   */
  constructor(props) {
    super(props);
  const {classes} = props;
    this.state = {
      auth: true,
      anchorElement: null,
      open: false,
      DrawerState: false,
      elevationValue: 0,
    };
    // this.clicker = this.clicker.bind(this)
// P.S.
}

  handleClick = () => {
    if (this.state.open) {
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  };

  handleClose = () => {
    this.setState({open: false});
  };

  openDrawer = () => {
    this.setState({DrawerState: true});
  };

  closeDrawer = () => {
    this.setState({DrawerState: false});
  }

  // handleMenu = event => {
  //   this.setState({ anchorElement: event.currentTarget });
  // };

  // handleClose = () => {
  //   this.setState({ anchorElement: null });
  // };
handleToggle=()=>this.props.openDrawer()
  render() {
    const {classes} = this.props;
    const {auth, anchorElement} = this.state;
    const openSecMenu = Boolean(anchorElement);
    const {open} = this.state;
    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position='fixed' elevation={this.state.elevationValue}>
          <Toolbar>
          <Media query="(max-width: 599px)">
          {(matches) =>
            matches ? (
              <IconButton className={classes.menuButton} aria-label="Menu"
              onClick={this.openDrawer}>
              <MenuIcon style={{fontSize: 26, color: '#fff'}} />
              </IconButton>
              )
              :
              (
                <IconButton className={classes.menuButton}
                style={{marginRight: 20}}
                  aria-label="Menu"
                  onClick={this.openDrawer}>
                <MenuIcon style={{fontSize: 32, color: '#fff'}}/>
                </IconButton>
              )
                }
                </Media>

            <Media query="(max-width: 599px)">
              {(matches) =>
                matches ? (
                  <Typography type="display1"
                    style={{
                      fontSize: 24,
                      fontWeight: '300',
                      letterSpacing: 4,
                      color: '#fff',
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
                  fontWeight: '300',
                  letterSpacing: 7,
                  color: '#fff',
                  }}
                className={classes.flex}>
                CRYPTOX
            </Typography>
          )
            }
            </Media>
            {/*
              https://material-ui-next.com/demos/chips/
              use chips with name of trader after login
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
                <Media query={{maxWidth: 599}}>
                  {(matches) =>
                    matches ? (
                      <IconButton
                        aria-owns={open ? 'menu-list' : null}

                        aria-haspopup="true"
                        onClick={this.handleClick}
                      >
                        <AccountCircle style={{fontSize: 26, color: '#fff'}} />

                      </IconButton>
                    ) : (
                        <IconButton
                          aria-owns={open ? 'menu-list' : null}

                          aria-haspopup="true"
                          onClick={this.handleClick}
                        >
                          <AccountCircle style={{fontSize: 32, color: '#fff'}} />

                        </IconButton>
                      )
                  }
                </Media>
              </Target>
              <Popper
                placement="bottom-start"
                eventsEnabled={open}
                className={classNames({[classes.popperClose]: !open})}
              >
              <Media query={{maxWidth: 599}}>
              {(matches) =>
                matches ? (
                  <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow in={open} id="menu-list" style={{transformOrigin: '0 0 0'}}>
                          <Paper>
                            <MenuList style={{
                              paddingBottom: 1,
                              paddingTop: 1,
                            }}>
                              {sideList}
                            </MenuList>
                          </Paper>
                          </Grow>
                          </ClickAwayListener>
                        )
                        :
                        (
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <Grow in={open} id="menu-list" style={{transformOrigin: '0 0 0'}}>
                                              <Paper>
                              <MenuList style={{
                                paddingBottom: 1,
                                paddingTop: 1,
                              }}>
                                {sideList}
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
            <Drawer open={this.state.DrawerState} onClose={this.closeDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.closeDrawer}
                onKeyDown={this.closeDrawer}
              >
                {sideList}
              </div>
            </Drawer>
        </AppBar>

      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(headerActions, dispatch);
const AppHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withStyles(styles)(AppHeader);
