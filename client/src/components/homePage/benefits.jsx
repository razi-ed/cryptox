import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import {createMuiTheme} from 'material-ui/styles';
import {red, lightBlue} from 'material-ui/colors';
import {Link} from 'react-router-dom';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import SignUpIcon from 'material-ui-icons/AddCircleOutline';
import ThreeDRotation from 'material-ui-icons/ThreeDRotation';


const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    accent: red,
  },
  status: {
    danger: 'orange',
  },
});

const styles = (theme) => ({
  icon: {
    fontSize: 36,
  },
  paperColorNSize: {

  },
  card: {},
  cardActionButton: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
});

/**
 * class that creates Benefits component that is used in homePage.
 */
class Benefits extends Component {
/**
   * this functions renders Benefitss component
   * @return {component} Home component
   */
  render() {
    const {classes} = this.props;

    return (
    <Paper className={classes.paperColorNSize} elevation={10}>
      <Grid
      container
      spacing={0}
      alignItems='center'
      direction='row'
      justify='space-around'>
      <Grid item xs={10} md={3}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container
              spacing={0}
              alignItems='flex-start'
              direction='row'
              justify='space-between'>
            <Grid item>
            <ThreeDRotation className={classes.icon}/>
            </Grid>
            <Grid item>
            <Typography align='left' type='headline'>
            Card 1
            </Typography>
            </Grid>
            </Grid>
          </CardContent>
          <CardActions>
          <Link to='/login'>
            <Button color='accent' raised className={classes.cardActionButton}>
              <SignUpIcon style={{fontSize: 26, color: '#fff'}} />
            </Button>
          </Link>
          </CardActions>
        </Card>
      </Grid>


          <Grid item xs={10} md={3}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container
                  spacing={0}
                  alignItems='flex-start'
                  direction='row'
                  justify='space-between'>
                  <Grid item>
                    <ThreeDRotation className={classes.icon} />
                  </Grid>
                  <Grid item>
                    <Typography align='left' type='headline' gutterBottom>
                      Card 2
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button color='accent' raised className={classes.cardActionButton}>
                  <Link to='/login'>
                    <SignUpIcon style={{fontSize: 26, color: '#fff'}} />
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>


          <Grid item xs={10} md={3}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container
                  spacing={0}
                  alignItems='flex-start'
                  direction='row'
                  justify='space-between'>
                  <Grid item>
                    <ThreeDRotation className={classes.icon} />
                  </Grid>
                  <Grid item>
                    <Typography align='left' type='headline' gutterBottom>
                    Card 3
                  </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button color='accent' raised className={classes.cardActionButton}>
                  <Link to='/login'>
                    <SignUpIcon style={{fontSize: 26, color: '#fff'}} />
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </Paper>
    );
  }
}

Benefits.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Benefits);
