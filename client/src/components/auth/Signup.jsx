import React from 'react';
import Button from 'material-ui/Button';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';

/**
 * this class creates a component for signup
 */
export default class SignUp extends React.Component {
  /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: ' ',
      password: ' ',
      showPassword: false,
      passwordColor: ' red',
      passwordHelperText: ' none',
      confirmPasswordColor: ' red',
      confirmHelperText: ' none',
      isPasswordMatch: false,
      isPasswordSet: false,
    };
    this.validatePassword=this.validatePassword.bind(this);
    this.confirmPassword=this.confirmPassword.bind(this);
    this.createUser=this.createUser.bind(this);
    this.handleClickIcon=this.handleClickIcon.bind(this);
  }
  /**
   * this function sends a post request to registerUser api to create a new user
   */
  createUser() {
    console.log(this.state.name, this.state.email, this.state.password);
    if (this.state.name && this.state.email && this.state.password) {
      fetch(' /auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((res)=>res.json()).then((res) => {
        console.log(res);
      });
    } else {
      this.setState({isDialogOpen: true});
    }
  }
  /**
   * this function is an event handler which is called when eye icon is clicked
   */
  handleClickIcon() {
    this.setState({showPassword: !this.state.showPassword});
  }

  /**
   * this fuction is called to prevent default action when eye icon is clicked
   * @param {event} event
   */
  handleMouseDownIcon(event) {
    event.preventDefault();
  }
  /**
   * this function is called when there is change in value in password field
   * @param {event} event
   */
  validatePassword(event) {
    const pattern=new RegExp(/\w{8,}/);
    this.setState({passwordHelperText: ' block'});
    if (event.target.value.match(pattern)) {
      this.setState({password: event.target.value, passwordColor: ' green'});
    } else {
      this.setState({password: event.target.value, passwordColor: ' red'});
    }
  }
  /**
   * this function is called where there is change in Re-Enter password field
   * @param {event} event
   */
  confirmPassword(event) {
    this.setState({confirmHelperText: ' block'});
    if (this.state.password==event.target.value) {
      this.setState({isPasswordMatch: true, confirmPasswordColor: ' green'});
    } else {
      this.setState({isPasswordMatch: false, confirmPasswordColor: ' red'});
    }
  }
  /**
   * this function is called when react compnent is called to render
   * @return {component} component to be mounted
   */
  render() {
    return (
      <div>
          <h1 style={{textAlign: 'center'}} >Create New Account</h1>
          <div>
          <FormControl className='formElements'>
            <InputLabel>Name</InputLabel>
            <Input
              autoFocus={true}
              onChange={(event)=>this.setState({name: event.target.value})}
              />
          </FormControl>
          </div>
          <div>
          <FormControl className='formElements'>
            <InputLabel >Email</InputLabel>
            <Input
              type='email'
              onChange={(event)=>this.setState({email: event.target.value})}
            />
          </FormControl>
          </div>
          <div>
          <FormControl className='formElements'>
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
                    display: this.state.passwordHelperText,
                  }
                }
              >
              Password length must be atleast 8 characters
              </FormHelperText>
          </FormControl>
          </div>
          <div>
          <FormControl className='formElements'>
            <InputLabel>Re-Enter Password</InputLabel>
            <Input
              type=' password'
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
              {this.state.isPasswordMatch?'Password Match': 'Password Mismatch'}
            </FormHelperText>
          </FormControl>
          </div>
              <div style={{paddingTop: 25, textAlign: ' center'}}>
                <Button
                  raised
                  color='primary'
                  type='submit'
                  onClick={this.createUser}
                >
                  Create New Account
                </Button>
              </div>
      </div>
    );
  }
}
