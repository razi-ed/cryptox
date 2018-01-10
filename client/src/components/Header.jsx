import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

/**
 * this class creates Header section for this project
 */
export default class Header extends React.Component {
  /**
   * this function is called by React to render the component
   * @return {component}
   */
  render() {
    return (
      <div style={{
        display: 'flex',
      }}>
        <AppBar position='static'>
          <Toolbar
            style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div
              className="title-and-menu-button"
              style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
              <IconButton color='contrast' aria-label='Menu'>
                <MenuIcon/>
              </IconButton>
              <Typography
                type='title'
                color='inherit'
                style={{
                textAlign: 'center',
              }}>
                <Link to='/'>CrytpX</Link>
              </Typography>
            </div>
            <div
              style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}></div>
            <div>
              <Button color='contrast' className='exchange'>
                <Link to='/exchange'>Trade</Link>
              </Button>
            </div>
            <div>
              <Button color='contrast' className='dashboard'>
                <Link to='/dashboard'>Dashboard</Link>
              </Button>
            </div>
            <div>
              <Button color='contrast' className='login'>
                <Link to='/login'>Login/SignUp</Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
