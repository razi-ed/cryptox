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
  },
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'block',
  },


})

function loginUser(){
  fetch("http://localhost:5000/auth/login",{
    method:"POST",
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
            <Button type="submit" raised color="accent" className={classes.button} onClick={this.loginUser}>
              Continue with Google+
              </Button>
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
