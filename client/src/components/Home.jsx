import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import {withTheme, createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {red, lightBlue} from 'material-ui/colors';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
    accent: red,
    contrast: '#FFFFFF',
  },
  status: {
    danger: 'orange',
  },
});


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  },
  button: {
    margin: theme.spacing.unit,
  },
  landingPage: {
    backgroundColor: theme.palette.primary[500],
  },
});
/**
 * class that creates Home component
 */
class Home extends React.Component {
  /**
   * this functions renders home component
   * @return {component} Home component
   */
  render() {
    const {classes} = this.props;

    return (
      <div className = { classes.root }>
        {/* <Header /> */}
        <Grid container spacing={0} className = {classes.landingPage}>

          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>
              <Typography type="display3">
                Control Your Future Wealth
      </Typography>
              <Typography type="subheading">
                secure, manage and exchange cryptocurrencies
      </Typography>
             <Button raised color="accent"
             className={classes.button}
             component={Link} to='/exchange/fiat/INR'>
        Start Trading
          </Button>
      </Paper>

      </Grid>
      </Grid>
        </div>
      );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
