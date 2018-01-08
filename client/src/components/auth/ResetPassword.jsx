import React, { Component } from 'react';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import {FormHelperText, FormControl} from 'material-ui/Form';
import '../../css/style.css';
import Grid from 'material-ui/Grid';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';

export default class ResetPassword extends Component {

  constructor() {
    super();
    this.state = {
      showPassword: false,
      passwordColor: ' red',
      passwordHelperText: ' none',
      confirmPasswordColor: ' red',
      confirmHelperText: ' none',
      isPasswordMatch: false,
      isPasswordSet: false,
    }
    this.validatePassword = this.validatePassword.bind(this)
    this.confirmPassword = this.confirmPassword.bind(this)
    this.handleClickIcon = this.handleClickIcon.bind(this)
    this.sendResetRequest = this.sendResetRequest.bind(this)

  }
  validatePassword(event) {
    const pattern = new RegExp(/\w{8,}/);
    this.setState({ passwordHelperText: ' block' });
    if (event.target.value.match(pattern)) {
      this.setState({ password: event.target.value, passwordColor: ' green' });
    } else {
      this.setState({ password: event.target.value, passwordColor: ' red' });
    }
  }


  confirmPassword(event) {
    this.setState({ confirmHelperText: ' block' });
    if (this.state.password == event.target.value) {
      this.setState({ isPasswordMatch: true, confirmPasswordColor: ' green' });
    } else {

      this.setState({ isPasswordMatch: false, confirmPasswordColor: ' red' });
    }
  }
  handleClickIcon() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleMouseDownIcon(event) {
    event.preventDefault();
  }
  sendResetRequest(){
    fetch("/auth/resetPassword", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.props.email,
        password: this.state.password
      })
    }).then(res => res.text()).then((res) => {
      console.log(res);
    })
  }
  render() {

    return (
      <div>
        <FormControl className='formElements'>
          <InputLabel>Password</InputLabel>
          <Input
            type={this.state.showPassword ? 'text' : 'password'}
            onChange={this.validatePassword}
            onFocus={this.validatePassword}
            endAdornment={
              <InputAdornment position='end' >
                <IconButton
                  onClick={this.handleClickIcon}
                  onMouseDown={this.handleMouseDownIcon}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            style={{ color: this.state.passwordColor, display: this.state.passwordHelperText, }}>
            Password length must be atleast 8 characters
            </FormHelperText>
        </FormControl>
        <FormControl className='formElements'>
          <InputLabel>Re-Enter Password</InputLabel>
          <Input
            type='password'
            onChange={this.confirmPassword}
          />
          <FormHelperText
            style={
              {
                color: this.state.confirmPasswordColor,
                display: this.state.confirmHelperText,
              }
            }
          >
            {this.state.isPasswordMatch ? 'Password Match' : 'Password Mismatch'}
          </FormHelperText>
        </FormControl>
        <div style={{ paddingTop: 25, textAlign: "center" }}>
          <Button
            raised
            color="primary"
            type="submit"
            onClick={() => {
              this.sendResetRequest();

            }}
          > Reset Password
                </Button>
        </div>
      </div>
    )
  }
}