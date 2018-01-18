import React from 'react';
import PropTypes from 'prop-types';
// import {withStyles} from 'material-ui/styles';
import { Paper, Grid, Typography} from 'material-ui';
// import Grid from 'material-ui/Grid';
import classNames from 'classnames';
// import Typography from 'material-ui/Typography';
import {withStyles, createMuiTheme} from 'material-ui/styles';
import {red, lightBlue} from 'material-ui/colors';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import HeroImage from '../../utils/landing_page.png';
import Benefits from './homePage/benefits';
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
    height: '100vh',
    marginBottom: theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 5,
    },
  button: {
    margin: theme.spacing.unit,
  },
  landingPage: {
    backgroundColor: 'rgba(255,255,255,0.87)',
  },
  landingPagePaper: {
    backgroundColor: theme.palette.primary[500],
  },
  featuresPaper: {
  // height: '45vh',
    paddingTop: theme.spacing.unit* 4,
    paddingBottom: theme.spacing.unit* 4,
    paddingLeft: theme.spacing.unit*2,
    backgroundColor: 'rgba(250,250,250,0.87)',
  },
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
  card: {
    maxWidth: 345,
  },
  cardMedia: {
    minHeight: 200,
  },
});
/**
 * class that creates Home component
 */
class Home extends React.Component {
  /**
   * this functions renders home component
   * @param {object} props
   */
   constructor(props) {
    super(props);
    this.state = {
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
      elevationValue: 0,
      cardElevationValue1: 1,
      cardElevationValue2: 1,
      cardElevationValue3: 1,

    };
}
  raiseCards(num) {
    this.setState({[`cardElevationValue${num}`]: 10});
  }

  unRaiseCards(num) {
    this.setState({[`cardElevationValue${num}`]: 1});
  }

  /**
  * @return {component} Home component
   */
  render() {
    const {classes} = this.props;

    return (
      <div className = { classes.root }>
        <div>
          <Paper className={classes.paperColorNSize} elevation={10}>
          <Grid
            container
            spacing={0}
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

          <Paper className={classes.featuresPaper} >
            <Grid
              container
              spacing={0}
              alignItems='center'
              direction={this.state.direction}
              justify= 'space-around'
            >
              <Grid item xs={10} md={3}>
                <Card className={classes.card}
                  elevation={this.state.cardElevationValue1}
                onMouseOut={() => this.unRaiseCards('1')}
                onMouseOver={() => this.raiseCards('1')}>
                  <CardMedia
                    className={classes.media}
                    image="https://s3.amazonaws.com/dsg.files.app.content.prod/gereports/wp-content/uploads/2017/05/16133617/GettyImages-645390792-1024x661.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography type="headline" component="h2">Feature 1</Typography>
                    <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro nobis, earum necessitatibus unde deserunt a aperiam? Culpa ea est excepturi odio necessitatibus doloribus, fuga deleniti dolore nam expedita numquam!
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-around'}}>
                    <Button raised color="primary">
                      YYOOOO
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={10} md={3}>
                <Card className={classes.card}
                  elevation={this.state.cardElevationValue2}
                  onMouseOut={() => this.unRaiseCards('2')}
                  onMouseOver={() => this.raiseCards('2')}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/730569/pexels-photo-730569.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography type="headline" component="h2">feature2</Typography>
                    <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro nobis, earum necessitatibus unde deserunt a aperiam? Culpa ea est excepturi odio necessitatibus doloribus, fuga deleniti dolore nam expedita numquam!
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-around'}}>
                    <Button raised color="primary">
                      YYOOOO2
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={10} md={3}>
                <Card className={classes.card}
                  elevation={this.state.cardElevationValue3}
                  onMouseOut={() => this.unRaiseCards('3')}
                  onMouseOver={() => this.raiseCards('3')}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography type="headline" component="h2">feature3</Typography>
                    <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro nobis, earum necessitatibus unde deserunt a aperiam? Culpa ea est excepturi odio necessitatibus doloribus, fuga deleniti dolore nam expedita numquam!
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-around'}}>
                    <Button raised color="primary">
                      YYOOOO3
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>
          <Benefits />
          <Paper className={classes.featuresPaper} >
            <Grid
              container
              spacing={0}
              alignItems='center'
              direction= {this.state.direction}
              justify='space-around'
            >
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
