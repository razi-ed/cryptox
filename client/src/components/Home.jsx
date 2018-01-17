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
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import HeroImage from '../../utils/landing_page.png'
const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
    accent: red,
  },
  status: {
    danger: 'orange',
  },
});


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paperColorNSize: {
    backgroundColor: theme.palette.primary[500],
    height: '90vh',
    },
  button: {
    margin: theme.spacing.unit,
  },
  landingPage: {
    backgroundColor: 'rgba(255,255,255,0.87)',
    paddingBottom: 10,
    paddingTop: 10,
  },
  landingPagePaper: {
    backgroundColor: theme.palette.primary[500],
  },
  paper: theme.mixins.gutters({
  
  }),
  featuresPage: {
    paddingTop: 40,
    backgroundColor: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  media: {
    height: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  heroImage: {
    height: theme.spacing.unit *40,
    width: theme.spacing.unit *50,
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
  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    elevationValue: 0
  };
  render() {
    const {classes} = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className = { classes.root }>
        <Header elevationValue={this.state.elevationValue}/>
        <div>
          <Paper className={[classes.paper, classes.paperColorNSize]} elevation={10}>
          <Grid
            container
            spacing={12}
            alignItems='center'
            direction='column'
            justify='space-around'
          >
          <Grid item>
          <img className={classes.heroImage} src={HeroImage}/>            
          </Grid>            
          <Grid item>            
          <Typography type="display3">
            Control Your Future Wealth
          </Typography>
          </Grid>
              <Grid item>            
                <Typography type="subheading">secure, manage and exchange cryptocurrencies</Typography>
              </Grid>
              <Grid item>
              <Button raised color="accent"
                className={classes.button}
                component={Link} to='/login'>
                Start Trading
          </Button>


              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
      );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
