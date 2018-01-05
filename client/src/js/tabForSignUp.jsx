import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import LogIn from './login';
import SignUp from './signup'
import Grid from 'material-ui/Grid';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    //marginTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
});

export default class BasicTabs extends React.Component {
  state  ={
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={this.props.root}>
      <Grid container item xs={12} style={{justifyContent:"center"}}>
      {/* <Grid item sm={3} xs={0}/> */}
      <Grid item sm={6} xs={12} lg={6} md={6} style={{alignItems:"center"}}>
      
        <AppBar position="static" >
       
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="LogIn" />
            <Tab label="SignUp" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><LogIn/></TabContainer>}
        {value === 1 && <TabContainer><SignUp/></TabContainer>}
        
        </Grid>
        </Grid>
        {/* <Grid item sm={3} xs={0}/> */}
      </div>
      
    );
  }
}

// BasicTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(BasicTabs);