import React, { Component } from 'react';
import {  BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import '../css/style.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'none',
  },


})




export  class Login extends Component {
  state = {
    email: "",
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid item sm={4}></Grid>
        <Grid id='frame' item sm={4}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                type="Email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </div>

          </form>
          <div id='button_line'>
            <Button type="submit" raised color="primary" label="Log In" className={classes.button}>
              Log In
        </Button>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </Grid>

        <Grid item sm={4}></Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

// export default withStyles(styles)(Login);
// class Form extends Component{
//   // render(){
//   //   return (
      


//   //     );
//   // }
// }

// module.exports=Login;
