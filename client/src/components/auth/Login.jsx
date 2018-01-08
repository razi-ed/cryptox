import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import '../../css/style.css'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';

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

export  class Login extends React.Component {
  constructor(){
    super()
    this.state={
      email: "",
      password: '',
      showPassword: false,
    }
  }

  loginUser(){
    console.log(document.getElementById('log-email').value)
    fetch("/auth/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email:document.getElementById('log-email').value,
        password: document.getElementById('log-password').value
      })
    }).then(res=>res.text()).then((res)=>{
      console.log(res);
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>       
         <div>
            <h1 style={{textAlign:"center"}}>Log Into Your Account</h1>
              <TextField fullWidth
                required
                id="log-email"
                label="Email" 
                type="Email"
                margin="normal"
              />
              <TextField fullWidth
                required
                id="log-password"
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
          </div>
          
          <hr className="hr-text" data-content="Or"></hr>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);