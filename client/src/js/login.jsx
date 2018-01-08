import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import GoogleButton from 'react-google-button'
import '../css/style.css';
import ForgotPassword from './forgotPassword';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
    email: "",
    password: '',
    showPassword: false,
  };
  this.changeEmail = this.changeEmail.bind(this)
  this.changePassword = this.changePassword.bind(this)
  this.loginUser = this.loginUser.bind(this)
}

  loginUser(){
    
    fetch("/auth/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email:this.state.email,
        password: this.state.password
      })
    }).then(res=>res.text()).then((res)=>{
      console.log(res);
    })
  }
  
  changeEmail(event) {
    this.setState({
      email: event.target.value
    });
    console.log(this.state.email);
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    });
    console.log(this.state.password)
  }

  render() {
    return (
      <div id="form">       
         <div>
            <h1>Log Into Your Account</h1>
              <TextField fullWidth
                required
                id="log-email"
                label="Email" 
                onChange = {this.changeEmail}
                type="Email"
                margin="normal"
              />
              <TextField fullWidth
                required
                id="log-password"
                label="Password"
                type="password"
                onChange = {this.changePassword}
                margin="normal"
              />
            <div id='button_line'>
              <Button type="submit" raised color="primary"  className="button" onClick={this.loginUser}>
                Log In
              </Button>
            </div>
            <div>
              <a id='forgPass' href="/reset-password">Forgot Password?</a>
            </div>
          </div>
          
          <hr className="hr-text" data-content="Or"></hr>
          <div id="signG">
            <GoogleButton
              type="dark"
              onClick={() => { console.log('this will not run on click since it is disabled') }}
            />
          </div>
          
      </div>
    );
  }
}
