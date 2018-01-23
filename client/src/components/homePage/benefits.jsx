import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import SignUpIcon from 'material-ui-icons/AddCircleOutline';
import EncryptedIcon from 'material-ui-icons/LockOutline';
import ExchangeIcon from 'material-ui-icons/ShowChart';
import DesignIcon from 'material-ui-icons/ViewQuilt';


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
  CardTextsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceAround',
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
          <div className={classes.CardTextsContainer}>
          <EncryptedIcon className={classes.icon}/>
          <Typography type='headline'>
        Data Security
        </Typography>
          </div>
            <Typography type='subheading' component="p">
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
              <Typography type='headline'>
              BEAUTIFUL LIVE CHARTS
              </Typography>
                </div>
                  <Typography type='subheading' component="p">
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
              <Typography type='headline'>
              INTUITIVE INTERFACE
            </Typography>
              </div>
                <Typography type='subheading' component="p">
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
