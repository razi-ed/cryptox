import React from 'react';
import Button from 'material-ui/Button';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import '../../css/style.css';
import Google from './Google';

/**
* @class
*/
export default class Login extends React.Component {
  /**
  * @constructor
  */
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      showPassword: false,
      validationHelperTextVisible: 'none',
      validationColor: 'red',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleMouseDownIcon = this.handleMouseDownIcon.bind(this);
  }
  /**
  * @function
  */
  loginUser() {
    if (this.state.email&&this.state.password) {
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((res)=>res.json()).then((res)=>{
        if (!res.success) {
          this.setState({validationHelperTextVisible: ' block'});
        }
        console.log(res);
      });
  } else {
    this.setState({isAlertVisible: 'block'});
  }
}
  /**
  * @param {event} event
  */
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  /**
  *
  * @param {event} event
  */
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  /**
  *@function
  */
  handleClickIcon() {
    this.setState({showPassword: !this.state.showPassword});
  }
  /**
  *
  * @param {event} event
  */
  handleMouseDownIcon(event) {
    event.preventDefault();
  }
  /**
  * @function
  * @return {loginhtml}
  * */
  render() {
    return (
      <div id='login-form'>
      <h1 style={{textAlign: 'center'}}>Log Into Your Account</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
      <FormControl
        className='form-elements'
        required={true}
      >
      <InputLabel >Email</InputLabel>
      <Input
      autoFocus={true}
      type='email'
      onChange={this.changeEmail}
      />
      </FormControl>
      <FormControl
        className='form-elements'
        required={true}
      >
      <InputLabel>Password</InputLabel>
      <Input
      type={this.state.showPassword ? 'text' : 'password'}
      onChange={this.changePassword}
      endAdornment={
        <InputAdornment position='end' >
        <IconButton
        onClick={this.handleClickIcon}
        onMouseDown={this.handleMouseDownIcon}
        >
        {this.state.showPassword ? <VisibilityOff />
          : <Visibility />}
          </IconButton>
          </InputAdornment>
        }
        />
        </FormControl>
        <FormHelperText
        style={
          {
            color: this.state.validationColor,
            display: this.state.validationHelperTextVisible,
          }
        }
        >
        Invalid Email Or Password
        </FormHelperText>
        <div id='login-button'>
        <Button type="submit"
        raised color="primary"
        className="button"
        onClick={this.loginUser}>
        Log In
        </Button>
        </div>
        <div id='forgot-password'>
        <a id='forgot-password-link'
        href="/reset-password">
        Forgot Password?</a>
        </div>
        <hr className="hr-text" data-content="Or"></hr>
        <div id="google-signin">
        <Google/>
        </div>
        </form>
        </div>
      );
    }
  }
