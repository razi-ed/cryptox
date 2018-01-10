import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import LogIn from './Login';
import SignUp from './Signup';
import Grid from 'material-ui/Grid';

/**
 * this fuction takes props as parameter and creates padding for tab
 * @param {props} props
 * @return {component} Typography component
 */
function TabContainer(props) {
  return (
    <Typography component='div' style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

/**
 * class to create tab structure for signup and login
 */
export default class BasicTabs extends React.Component {
  /**
   * constructor to initialize object
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state={
      value: 0,
    };
    this.handleChange=this.handleChange.bind(this);
  }
  /**
   * @param {event} event
   * @param {value} value
   * this function sets state value to current tab that is being viewed
   */
  handleChange(event, value) {
    this.setState({value});
  };
  /**
   * this function renders the tab component
   * @return {component} tab component
   */
  render() {
    const {value} = this.state;
    ;
    return (
      <div id='nav-tab-login-frame'>
      <Grid container spacing={0} style={{justifyContent: 'center'}}>
      <Grid item xs={12} sm={8} md={8} lg={6} style={{alignItems: 'center'}}>
      <div>
        <AppBar
          className='tabs'
          position='static'
        >
          <Tabs centered value={value} onChange={this.handleChange}
           style={{justifyContent: 'center'}}>
            <Tab label='LogIn' />
            <Tab label='SignUp' />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><LogIn/></TabContainer>}
        {value === 1 && <TabContainer><SignUp/></TabContainer>}
        </div>
        </Grid>
        </Grid>
      </div>
    );
  }
}
