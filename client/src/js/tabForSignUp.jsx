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
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

export default class BasicTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={this.props.root}>
      <Grid container>
      <Grid item sm={3} xs={2}/>
      <Grid item sm={6} xs={2} style={{alignItems:"center"}}>
      <div>
        <AppBar position="static">
       
          <Tabs value={value} onChange={this.handleChange} style={{display:"flex",justifyContent:"space-between"}}>
            <Tab label="LogIn" />
            <Tab label="SignUp" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><LogIn/></TabContainer>}
        {value === 1 && <TabContainer><SignUp/></TabContainer>}
        </div>
        </Grid>
        </Grid>
        <Grid item sm={3} xs={2}/>
      </div>
      
    );
  }
}

// BasicTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(BasicTabs);