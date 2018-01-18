import React from 'react';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import Grid from 'material-ui/Grid';

/**
 * @class
 */
class ChangePasswordForm extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      oldPassword: null,
      newPassword: null,
      showPassword: false,
      actionmessage: `couldn't update password`,
      doesPasswordContainLowerCase: 'red',
      doesPasswordContainUpperCase: 'red',
      doesPasswordContainNumber: 'red',
      doesPasswordLengthSatisfied: 'red',
      passwordColor: 'red',
      passwordNotFound: 'Please Enter Password',
      validationHelperTextVisible: 'none',
      isPasswordHelperTextVisible: 'none',
      confirmPasswordColor: 'red',
      isconfirmHelperText: 'none',
      isPasswordMatch: false,
      isPasswordSet: false,
    };
    this.changePassword = this.changePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleMouseDownIcon = this.handleMouseDownIcon.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.sendChangePasswordRequest = this.sendChangePasswordRequest.bind(this);
  }

  /**
  * @param {event} event
  */
  changePassword(event) {
    this.setState({
      newPassword: event.target.value,
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
                newPassword: event.target.value,
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
    this.setState({isconfirmHelperText: 'block'});
    if (this.state.newPassword == event.target.value) {
      this.setState({isPasswordMatch: true, confirmPasswordColor: 'green'});
    } else {
      this.setState({isPasswordMatch: false, confirmPasswordColor: 'red'});
    }
  }

  /**
   *@function
   */
  sendChangePasswordRequest() {
    if (this.state.isPasswordSet) {
      if (this.state.newPassword
        && this.state.isPasswordMatch) {
          fetch('/profile', {
            method: 'PUT',
            headers: {
              'Authorization': localStorage.getItem('token'),
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              oldPassword: this.state.oldPassword,
              newPassword: this.state.newPassword,
            }),
          }).then((res) => res.json()).then((res) => {
            console.log(res);
            if (res.success) {
              this.setState({
                actionmessage: 'Password updated successfully',
                validationHelperTextVisible: 'block',
              });
            } else {
              this.setState({
                validationHelperTextVisible: 'block',
              });
            }
          });
      } else {
        this.setState({
                        isPasswordHelperTextVisible: 'block',
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
   * @method
   * @return {passwordForm}
   */
  render() {
    return (
      <div id="password-form">
        <Grid item xs={12} sm={8} md= {8}>
        <h4 style={{
                    color: 'red',
                    display: this.state.validationHelperTextVisible,
                    paddingTop: 12,
                  }}>
                  {this.state.actionmessage}
        </h4>
          <form onSubmit={(e) => e.preventDefault()}>

          <FormControl
          className = 'form'
            required = {true}
          >
          <InputLabel>Old Password</InputLabel>
          <Input
            type='password'
            onChange = {(event)=> {
              this.setState({
                oldPassword: event.target.value,
              });
            }}
            />
          </FormControl>

          <FormControl
              className = 'form'
              required={true}
          >
          <InputLabel>New Password</InputLabel>
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
              console.log('clicked');

              this.sendChangePasswordRequest();
            }}
          > Reset Password
                </Button>
        </div>
          </form>
        </Grid>
      </div>
    );
  }
}

export default withRouter(ChangePasswordForm);
