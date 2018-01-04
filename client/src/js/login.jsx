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
import OverridesClassNames from "./icon.js";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'block',
  }
})
const icons = {
  'google': 'M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z'
};


function loginUser(){
  fetch("http://localhost:5000/auth/login",{
  // method:"POST",
    body:JSON.stringify({
      email:document.getElementById('email').value,
      password: document.getElementById('password').value
    })
  }).then((res)=>{
    console.log(res);
  })
}


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
    console.log(this.state.email);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid item sm={4}></Grid>
        <Grid id='frame' item sm={4}>
        
          <form method="POST" autoComplete="off">
            <h1>Log Into Your Account</h1>
              <TextField fullWidth
                required
                id="email"
                label="Email" 
                type="Email"
                margin="normal"
              />
              <TextField fullWidth
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            <div id='button_line'>
              <Button type="submit" raised color="primary"  className={classes.button} onClick={this.loginUser}>
                Log In
              </Button>
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
          
          <hr className="hr-text" data-content="Or"></hr>
          <div id="signG">
            {/* <Button type="submit" raised color="accent" className={classes.button} onClick={this.loginUser}> */}
              <OverridesClassNames/>
              {/* Continue with Google+
              </Button> */}
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