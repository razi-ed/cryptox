import React from 'react';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Button from 'material-ui/Button';
import {FormHelperText, FormControl} from 'material-ui/Form';
import '../../css/style.css';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';

/**
 *@class
 */
export default class ResetPassword extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
      this.state = {
      password: null,
      showPassword: false,
      passwordColor: 'red',
      passwordNotFound: 'Please Enter Password',
      isPasswordHelperTextVisible: 'none',
      confirmPasswordColor: 'red',
      isconfirmHelperText: 'none',
      isPasswordMatch: false,
      isPasswordSet: false,
      doesPasswordContainLowerCase: 'red',
      doesPasswordContainUpperCase: 'red',
      doesPasswordContainNumber: 'red',
      doesPasswordLengthSatisfied: 'red',
    };
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.sendResetRequest = this.sendResetRequest.bind(this);
  }

/**
 *
 * @param {event} event
 */
  validatePassword(event) {
    this.setState({isPasswordHelperTextVisible: 'block'});
    const lowerCase = /([a-z])/g;
    const upperCase = /([A-Z])/g;
    const numbers = /([0-9])/g;
    const len = event.target.value.length;
    const validator = (reg) => event.target.value.match(reg);
    !validator(lowerCase) ?
      this.setState(
        {
          passwordHelperText: 'must contain lowercase letters',
          passwordColor: 'red',
        }) :
      !validator(upperCase) ?
        this.setState(
          {
            passwordHelperText: 'must contain uppercase letters',
            passwordColor: 'red',
          }) :
        !validator(numbers) ?
          this.setState(
            {
              passwordHelperText: 'must conatin a number',
              passwordColor: 'red',
            }) :
          len < 8 ?
            this.setState(
              {
                passwordHelperText: 'must contain minimum of 8 characters',
                passwordColor: 'red',
              }) :
            this.setState(
              {
                password: event.target.value,
                passwordHelperText: 'Valid password',
                passwordColor: 'green',
                isPasswordSet: true,
              });
  }

/**
 *
 * @param {event} event
 */
  confirmPassword(event) {
    this.setState({isconfirmHelperText: ' block'});
    if (this.state.password == event.target.value) {
      this.setState({isPasswordMatch: true, confirmPasswordColor: ' green'});
    } else {
      this.setState({isPasswordMatch: false, confirmPasswordColor: ' red'});
    }
  }
  /**
   * @function
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
   *@function
   */
  sendResetRequest() {
    if (this.state.isPasswordMatch) {
      if (this.state.password && this.props.email) {
        fetch('/auth/resetPassword', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.props.email,
            password: this.state.password,
          }),
        }).then((res) => res.text()).then((res) => {
          console.log(res);
        });
      } else {
        this.setState({
                        isPasswordHelperTextVisible: 'block',
                        passwordHelperText: this.state.passwordNotFound,
                        isconfirmHelperText: 'block',
                      });
      }
    } else {
      this.setState({
                      isPasswordHelperTextVisible: 'block',
                      passwordHelperText: this.state.passwordNotFound,
                      isconfirmHelperText: 'block',
                    });
    }
  }

/**
 * @function
 * @return {resetPasswordHtml}
 */
  render() {
    return (
      <div>
         <FormControl
                className='form-elements'
                >
                <InputLabel>Password</InputLabel>
                <Input
                type={this.state.showPassword?'text': 'password'}
                onChange={this.validatePassword}
                onFocus={this.validatePassword}
                endAdornment={
                  <InputAdornment position='end' >
                  <IconButton
                  onClick={this.handleClickIcon}
                  onMouseDown={this.handleMouseDownIcon}
                  >
                  {this.state.showPassword?<VisibilityOff/>: <Visibility/>}
                  </IconButton>
                  </InputAdornment>
                }
                />
                <FormHelperText
                style={
                  {
                    color: this.state.passwordColor,
                    display: this.state.isPasswordHelperTextVisible,
                  }
                }
                >
                {this.state.passwordHelperText}
                </FormHelperText>
                </FormControl>
                <FormControl
                className='form-elements'
                required={true}
                >
                <InputLabel>Re-Enter Password</InputLabel>
                <Input
                type='password'
                onChange={this.confirmPassword}
                />
                <FormHelperText
                style={
                  {
                    color: this.state.confirmPasswordColor,
                    display: this.state.isconfirmHelperText,
                  }
                }
                >
                {this.state.isPasswordSet?
                  (this.state.isPasswordMatch?
                    'Password Match': 'Password Mismatch'):
                    'Please Enter Password'
                }
                </FormHelperText>
                </FormControl>

        <div style={{paddingTop: 25, textAlign: 'center'}}>
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
    );
  }
}
