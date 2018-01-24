import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import EncryptedIcon from 'material-ui-icons/LockOutline';
import ExchangeIcon from 'material-ui-icons/ShowChart';
import DesignIcon from 'material-ui-icons/ViewQuilt';


const styles = (theme) => ({
  root: {
    height: theme.spacing.unit * 30,
    backgroundColor: theme.palette.text.secondary,
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  icon: {
    fontSize: 36,
  },
  card: {},
  cardActionButton: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
  },
  CardTextsContainer: {
    display: 'flex',
    flexDirection: 'row',
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
    <Paper className={classes.root} elevation={10}>
      <Grid
      container
      spacing={0}
      alignItems='center'
      direction='row'
      justify='space-around'>

      <Grid item xs={10} md={3}>
        <Card className={classes.card}>
          <CardContent>
          <div className={classes.CardTextsContainer}>
          <EncryptedIcon className={classes.icon}/>
          <Typography type='headline' align="center">
        Data Security
        </Typography>
          </div>
            <Typography type='subheading' align="center">
            Cryptox encrypts user and transaction data with strong tools.
            Your data remains private.
            </Typography>
          </CardContent>
        </Card>
      </Grid>


          <Grid item xs={10} md={3}>
            <Card className={classes.card}>
                <CardContent>
                <div className={classes.CardTextsContainer}>
                <ExchangeIcon className={classes.icon} />
              <Typography type='headline' align="center">
              LIVE CHARTS
              </Typography>
                </div>
                <Typography type='subheading' align="center">
                  Real time charts as per market condition changes, which facilitate easy tracking of assets.
                  </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={10} md={3}>
            <Card className={classes.card}>
              <CardContent>
              <div className={classes.CardTextsContainer}>
              <DesignIcon className={classes.icon} />
              <Typography type='headline' align="center">
              INTUITIVE INTERFACE
            </Typography>
              </div>
                <Typography type='subheading' align="center">
                  Cryptox provide hassle-free yet
                  intuitive interface, along with an elegant experience.
                </Typography>
              </CardContent>
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
